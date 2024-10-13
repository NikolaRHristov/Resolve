import type Alias from "../Interface/Alias.tsx";
import type ProgramPaths from "../Interface/ProgramPaths.tsx";

/**
 * Convert an aliased path to a relative path.
 *
 * @param importSpecifier A import specifier as used in the source file
 * @param outputFile The location of the file that the aliased path was from.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 * @param esModule Whether the import will be resolved with ES module semantics or commonjs semantics
 *
 */
declare const _default: (
	Specifier: string,
	File: string,
	Alias: Alias[],
	{ Source, Target }: Pick<ProgramPaths, "Source" | "Target">,
	Module?: boolean,
) => Promise<{
	Original: string;
	Replace?: string;
}>;
export default _default;
export declare const Normalize: (Path: string) => string;
export declare const Import: (Path: string) => Promise<
	| {
			Import: string;
			File: string;
			Type: "file";
	  }
	| {
			Import: string;
			File: string[];
			Type: "directory";
	  }
	| null
>;
export declare const resolve: (...paths: string[]) => string,
	relative: (from: string, to: string) => string,
	dirname: (path: string) => string;
