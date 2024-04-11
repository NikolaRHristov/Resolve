export default interface Interface {
	/** Absolute path to `baseUrl` as defined in the tsconfig file. */
	basePath: string;

	/** Absolute path to the directory the tsconfig file is in. */
	configPath: string;

	/** Absolute path to the tsconfig file. */
	configFile: string;

	/** Absolute path to the source directory. */
	srcPath: string;

	/** Absolute path to the output directory. */
	outPath: string;
}
