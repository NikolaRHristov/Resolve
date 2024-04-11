export interface Alias {
    /** The original path alias. */
    alias: string;
    /** The alias prefix that has been matched. */
    prefix: string;
    /** The paths that the alias points to. */
    aliasPaths: string[];
}
