/**
 * Generate the alias path mapping changes to apply to the provide files.
 *
 * @param File The list of files to replace alias paths in.
 * @param aliases The path mapping configuration from tsconfig.
 * @param programPaths Program options.
 *
 */
export default (
	File: string[],
	Alias: Alias[],
	Path: Pick<ProgramPaths, "Source" | "Target">
): Change[] => {
	const Change: Change[] = [];

	File.forEach(async (File) => {
		const {
			Changed: changed,
			Text: Text,
			Change: Change,
		} = (await import("@Function/Replace.js")).default(File, Alias, Path);

		if (!changed) {
			return;
		}

		Change.push({ File, Text, Change });
	});

	return Change;
};

import type Alias from "@Interface/Alias.js";
import type Change from "@Interface/Change.js";
import type ProgramPaths from "@Interface/ProgramPaths.js";
