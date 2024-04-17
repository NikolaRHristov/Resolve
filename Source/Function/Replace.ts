/**
 * Read the file at the given path and return the text with aliased paths replaced.
 *
 * @param filePath The path to the file.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 *
 */
export const _Function = async (
	filePath: string,
	Alias: Alias[],
	Path: Pick<ProgramPaths, "Source" | "Target">
): Promise<{ Changed: boolean; Text: string; Change: TextChange[] }> => {
	try {
		await (
			await import("fs/promises")
		).access(filePath, (await import("fs/promises")).constants.F_OK);
	} catch (error) {
		throw new FileNotFound(_Function.name, filePath);
	}

	const Text = readFileSync(filePath, "utf-8");

	const Change: TextChange[] = [];

	const newText = Text.replace(
		/((?:require\(|require\.resolve\(|import\()|(?:import|export)\s+(?:[\s\S]*?from\s+)?)['"]([^'"]*)['"]\)?/g,
		async (Text: string, Statement: string, Specifier: string) => {
			// The import is an esm import if it is inside a typescript (definition) file or if it uses `import` or `export`
			const { Original, Replace } = await (
				await import("@Function/Convert")
			).default(
				Specifier,
				filePath,
				Alias,
				Path,
				!filePath.endsWith(".ts") &&
					(Statement.includes("import") ||
						Statement.includes("export"))
			);

			if (!Result.Replace) {
				return Text;
			}

			const Index = Text.lastIndexOf(Specifier);

			Change.push({
				Original: Normalize(Result.Original),
				Modify: Normalize(Result.Replace),
			});

			return (
				Text.substring(0, Index) +
				Result.Replace +
				Text.substring(Index + Specifier.length)
			);
		}
	);

	return {
		Changed: Text !== newText,
		Text: newText,
		Change: Change,
	};
};

export default _Function;

export const { default: Normalize } = await import("@Function/Normalize");

import type Alias from "@Interface/Alias";
import type ProgramPaths from "@Interface/ProgramPaths";
import type TextChange from "@Interface/TextChange";
