import type Alias from "../Interface/Alias.js";
/**
 * Compute the alias paths provided by the tsconfig.
 *
 */
export declare const _Function: (Base: string, Path: {
    [key: string]: string[];
}) => Promise<Alias[]>;
export declare const Regex: RegExp;
export default _Function;
