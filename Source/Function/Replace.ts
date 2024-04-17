/**
 * Read the file at the given path and return the text with aliased paths replaced.
 *
 * @param filePath The path to the file.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 */
export default (
	filePath: string,
	aliases: Alias[],
	programPaths: Pick<ProgramPaths, "Source" | "Target">
): { changed: boolean; text: string; changes: TextChange[] } => {
	if (!existsSync(filePath)) {
		throw new FileNotFound(replaceAliasPathsInFile.name, filePath);
	}

	const originalText = readFileSync(filePath, "utf-8");

	const changes: TextChange[] = [];

	const newText = originalText.replace(
		IMPORT_EXPORT_REGEX,
		(original, importStatement: string, importSpecifier: string) => {
			// The import is an esm import if it is inside a typescript (definition) file or if it uses `import` or `export`
			const esmImport =
				!filePath.endsWith(".ts") &&
				(importStatement.includes("import") ||
					importStatement.includes("export"));

			const result = aliasToRelativePath(
				importSpecifier,
				filePath,
				aliases,
				programPaths,
				esmImport
			);

			if (!result.replacement) {
				return original;
			}

			const index = original.lastIndexOf(importSpecifier);

			changes.push({
				Original: Normalize(result.original),
				Modify: Normalize(result.replacement),
			});

			return (
				original.substring(0, index) +
				result.replacement +
				original.substring(index + importSpecifier.length)
			);
		}
	);

	return { changed: originalText !== newText, text: newText, changes };
};
