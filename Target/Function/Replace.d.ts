/**
 * Read the file at the given path and return the text with aliased paths replaced.
 *
 * @param filePath The path to the file.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 *
 */
export declare const _Function: (filePath: string, Alias: Alias[], Path: Pick<ProgramPaths, "Source" | "Target">) => Promise<{
    Changed: boolean;
    Text: string;
    Change: TextChange[];
}>;
export default _Function;
export declare const Normalize: (Path: string) => string;
import type Alias from "@Interface/Alias";
import type ProgramPaths from "@Interface/ProgramPaths";
import type TextChange from "@Interface/TextChange";
