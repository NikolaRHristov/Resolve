/**
 * Normalize paths to resolve issues with paths on Windows.
 *
 * @see https://github.com/Playform/Resolve/pull/20
 * @see https://github.com/Playform/Resolve/pull/174
 *
 * @param path The path to normalize.
 */
export default (Path: string) =>
	Path.replace(/^\\\\\?\\/, "")
		.replace(/\\/g, "/")
		.replace(/\/\/+/g, "/")
		.replace(/^.\/\.\.\//g, "../");
