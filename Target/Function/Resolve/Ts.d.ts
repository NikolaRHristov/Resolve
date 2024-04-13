import type { ProgramOptions } from "~/types";
export type ResolveTsPathOptions = Omit<Partial<ProgramOptions>, "verbose" | "noEmit">;
/**
 * Convert Typescript path aliases to proper relative paths
 * in your transpiled JavaScript code.
 */
declare const _default: (options?: ResolveTsPathOptions) => void;
export default _default;
