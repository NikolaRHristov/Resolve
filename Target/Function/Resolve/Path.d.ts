import type Interface from "../../Interface/ProgramOptions.js";
import type ProgramPaths from "../../Interface/ProgramPaths.js";
import type TSConfig from "../../Interface/TSConfig.js";

/**
 * Resolve paths provided to the program to absolute paths.
 *
 */
export declare const _Function: (
	options: Pick<Interface, "Target" | "Project" | "Source">,
	tsConfig: TSConfig,
) => Promise<ProgramPaths>;
export default _Function;
