import type ProgramOptions from "../Interface/ProgramOptions";
export type ResolveTsPathOptions = Omit<Partial<ProgramOptions>, "verbose" | "noEmit">;
/**
 * Convert Typescript path aliases to proper relative paths
 * in your transpiled JavaScript code.
 *
 */
declare const _default: (Option?: ResolveTsPathOptions) => Promise<void>;
export default _default;
