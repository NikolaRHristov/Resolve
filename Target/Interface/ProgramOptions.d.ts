export default interface Interface {
    /**
     * Path to the project's tsconfig file. Defaults to "tsconfig.json"
     * if not provided.
     *
     */
    Project: string;
    /**
     * Path to the source directory. Defaults to `compilerOptions.rootDir`
     * from tsconfig. If `rootDir` is not defined in tsconfig, it will
     * default to "src".
     *
     */
    Source?: string | undefined;
    /**
     * Path to the output directory. Defaults to `compilerOptions.outDir`
     * from tsconfig if not provided.
     *
     */
    Target?: string | undefined;
    /**
     * A list of file extensions that will be matched for replacement.
     * Defaults to `["js", "d.ts"]` to handle js and type declaration
     * files.
     *
     */
    Extension: string[];
    /**
     * If `true`, verbose logs will be printed for degugging.
     *
     */
    Verbose: boolean;
    /**
     * If `true`, changes will not be emitted.
     *
     */
    NoEmit: boolean;
}
