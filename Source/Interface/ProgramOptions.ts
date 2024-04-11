export default interface ProgramOptions {
	/**
	 * Path to the project's tsconfig file. Defaults to "tsconfig.json"
	 * if not provided.
	 */
	project: string;
	/**
	 * Path to the source directory. Defaults to `compilerOptions.rootDir`
	 * from tsconfig. If `rootDir` is not defined in tsconfig, it will
	 * default to "src".
	 */
	src?: string;
	/**
	 * Path to the output directory. Defaults to `compilerOptions.outDir`
	 * from tsconfig if not provided.
	 */
	out?: string;
	/**
	 * A list of file extensions that will be matched for replacement.
	 * Defaults to `["js", "d.ts"]` to handle js and type declaration
	 * files.
	 */
	ext: string[];
	/**
	 * If `true`, verbose logs will be printed for degugging.
	 */
	verbose: boolean;
	/**
	 * If `true`, changes will not be emitted.
	 */
	noEmit: boolean;
}
