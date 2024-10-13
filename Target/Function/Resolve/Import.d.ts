/**
 * Find the file that will be imported by the given import path.
 *
 * @param importPath An non-relative import path
 *
 */
declare const _default: (Path: string) => Promise<
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
export default _default;
export declare const File: (path: string) => Promise<boolean>;
export declare const Module: string[];
