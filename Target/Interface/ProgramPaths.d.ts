export default interface Interface {
	/**
	 * Absolute path to `baseUrl` as defined in the tsconfig file.
	 *
	 */
	Base: string;
	/**
	 * Absolute path to the directory the tsconfig file is in.
	 *
	 */
	PathConfig: string;
	/**
	 * Absolute path to the tsconfig file.
	 *
	 */
	FileConfig: string;
	/**
	 * Absolute path to the source directory.
	 *
	 */
	Source: string;
	/**
	 * Absolute path to the output directory.
	 *
	 */
	Target: string;
}
