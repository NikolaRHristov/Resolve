export default interface Interface {
	/** The original path alias. */
	Alias: string;

	/** The alias prefix that has been matched. */
	Prefix: string;

	/** The paths that the alias points to. */
	Path: string[];
}
