import DEFAULT_EXTENSIONS from "@Variable/Extension";
import type ProgramOptions from "@Interface/ProgramOptions";

export const { default: applyChanges } = await import("@Function/Apply");
export const { default: computeAliases } = await import("@Function/Compute");
export const { default: generateChanges } = await import("@Function/Generate");
export const { default: getFilesToProcess } = await import("@Function/Get");
export const { default: loadTSConfig } = await import("@Function/Load");
export const { default: resolvePaths } = await import("@Function/Resolve");

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
		Project = "tsconfig.json",
		Source = "Source",
		Extension = DEFAULT_EXTENSIONS,
		out,
	} = options;

	const tsConfig = loadTSConfig(Project);

	const programPaths = resolvePaths(
		{ project: Project, src: Source, out },
		tsConfig
	);

	const aliases = computeAliases(
		programPaths.basePath,
		tsConfig?.options?.paths ?? {}
	);

	const files = getFilesToProcess(programPaths.outPath, Extension);

	const changes = generateChanges(files, aliases, programPaths);
	applyChanges(changes);
};
