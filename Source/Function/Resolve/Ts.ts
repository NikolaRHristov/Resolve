import { DEFAULT_EXTENSIONS } from "~/constants";
import type { ProgramOptions } from "~/types";

import { applyChanges } from "~/steps/applyChanges";
import { computeAliases } from "~/steps/computeAliases";
import { generateChanges } from "~/steps/generateChanges";
import { getFilesToProcess } from "~/steps/getFilesToProcess";
import { loadTSConfig } from "~/steps/loadTSConfig";
import { resolvePaths } from "~/steps/resolvePaths";

export type ResolveTsPathOptions = Omit<
	Partial<ProgramOptions>,
	"verbose" | "noEmit"
>;

/**
 * Convert Typescript path aliases to proper relative paths
 * in your transpiled JavaScript code.
 */
export default (options: ResolveTsPathOptions = {}): void => {
	const {
		project = "tsconfig.json",
		src = "src",
		ext = DEFAULT_EXTENSIONS,
		out,
	} = options;

	const tsConfig = loadTSConfig(project);

	const programPaths = resolvePaths({ project, src, out }, tsConfig);

	const aliases = computeAliases(
		programPaths.basePath,
		tsConfig?.options?.paths ?? {}
	);

	const files = getFilesToProcess(programPaths.outPath, ext);

	const changes = generateChanges(files, aliases, programPaths);
	applyChanges(changes);
};
