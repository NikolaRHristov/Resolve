/**
 * Generate the alias path mapping changes to apply to the provide files.
 *
 * @param files The list of files to replace alias paths in.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 */
declare const _default: (files: string[], aliases: Alias[], programPaths: Pick<ProgramPaths, "Source" | "Target">) => Change[];
export default _default;
/**
 * Read the file at the given path and return the text with aliased paths replaced.
 *
 * @param filePath The path to the file.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 */
export declare function replaceAliasPathsInFile(filePath: string, aliases: Alias[], programPaths: Pick<ProgramPaths, "Source" | "Target">): {
    changed: boolean;
    text: string;
    changes: TextChange[];
};
/**
 * Convert an aliased path to a relative path.
 *
 * @param importSpecifier A import specifier as used in the source file
 * @param outputFile The location of the file that the aliased path was from.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 * @param esModule Whether the import will be resolved with ES module semantics or commonjs semantics
 */
export declare function aliasToRelativePath(importSpecifier: string, outputFile: string, aliases: Alias[], { Source, Target }: Pick<ProgramPaths, "Source" | "Target">, esModule?: boolean): {
    file: string;
    original: string;
    replacement?: string;
};
import type Alias from "@Interface/Alias.js";
import type Change from "@Interface/Change.js";
import type ProgramPaths from "@Interface/ProgramPaths.js";
import type TextChange from "@Interface/TextChange.js";
export declare const IMPORT_EXPORT_REGEX: RegExp;
export declare const ESM_IMPORT_EXPORT_REGEX: RegExp;
export declare const COMMONJS_IMPORT_EXPORT_REGEX: RegExp;
