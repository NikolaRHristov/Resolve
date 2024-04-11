import type { Alias } from "~/types";
/**
 * Compute the alias paths provided by the tsconfig.
 */
declare const _default: (basePath: string, paths: {
    [key: string]: string[];
}) => Alias[];
export default _default;
