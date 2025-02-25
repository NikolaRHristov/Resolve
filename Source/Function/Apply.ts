import type Change from "../Interface/Change.js";

/**
 * Apply the file changes.
 *
 * @param changes The file changes to apply.
 */
export default (Change: Change[]) =>
	Change.forEach(async ({ File, Text }) =>
		(await import("node:fs/promises")).writeFile(File, Text, {
			encoding: "utf-8",
		}),
	);
