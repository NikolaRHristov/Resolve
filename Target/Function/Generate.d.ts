import type Alias from "../Interface/Alias.js";
import type Change from "../Interface/Change.js";
import type ProgramPaths from "../Interface/ProgramPaths.js";

/**
 * Generate the alias path mapping changes to apply to the provide files.
 *
 * @param File The list of files to replace alias paths in.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 *
 */
declare const _default: (
	File: string[],
	Alias: Alias[],
	Path: Pick<ProgramPaths, "Source" | "Target">,
) => Change[];
export default _default;
