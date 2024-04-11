import { resolve } from "path";
import { sync } from "fast-glob";

import { normalizePath } from "~/utils/path";

/**
 * Get the files in the output directory that should be processed.
 *
 * @param outPath The output directory.
 * @param extensions A list of extensions to match.
 */
export default (outPath: string, extensions: string[]) => {
	const normalizedOutPath = normalizePath(outPath);

	let glob = "*";
	if (extensions.length === 1) glob = `*.${extensions[0]}`;
	else if (extensions.length > 1) glob = `*.{${extensions.join(",")}}`;

	return sync(`${normalizedOutPath}/**/${glob}`, {
		dot: true,
		onlyFiles: true,
	}).map((path) => resolve(path));
};
