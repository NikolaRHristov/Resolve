import type TSConfig from "../Interface/TSConfig.tsx";
/**
 * Load the tsconfig file using Typescript's built-in config file loader.
 *
 * @param Path The path to the tsconfig file.
 *
 */
export declare const _Function: (Path: string) => Promise<TSConfig>;
export default _Function;
export declare const sys: import("typescript").System;
