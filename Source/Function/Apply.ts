/**
 * Apply the file changes.
 *
 * @param changes The file changes to apply.
 */
export default (Change: Change[]) =>
	Change.forEach(async ({ File, Text }) =>
		(await import("fs/promises")).writeFile(File, Text, {
			encoding: "utf-8",
		}),
	);

import type Change from "../Interface/Change.js";
