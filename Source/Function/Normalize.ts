/**
 * Normalize paths to resolve issues with paths on Windows.
 *
 * @param path The path to normalize.
 *
 */
export default (Path: string) =>
	Path.replace(/^\\\\\?\\/, "")
		.replace(/\\/g, "/")
		.replace(/\/\/+/g, "/")
		.replace(/^.\/\.\.\//g, "../");
