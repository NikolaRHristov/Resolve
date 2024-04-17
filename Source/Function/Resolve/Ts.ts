import DEFAULT_EXTENSIONS from "@Variable/Extension";
import type ProgramOptions from "@Interface/ProgramOptions";

export const { default: applyChanges } = await import("@Function/Apply.js");
export const { default: computeAliases } = await import("@Function/Compute.js");
export const { default: generateChanges } = await import(
	"@Function/Generate.js"
);
export const { default: getFilesToProcess } = await import("@Function/Get.js");
export const { default: loadTSConfig } = await import("@Function/Load.js");
export const { default: resolvePaths } = await import(
	"@Function/Resolve/Path.js"
);

export type ResolveTsPathOptions = Omit<
	Partial<ProgramOptions>,
	"verbose" | "noEmit"
>;

/**
 * Convert Typescript path aliases to proper relative paths
 * in your transpiled JavaScript code.
 *
 */
export default async (Option: ResolveTsPathOptions = {}): Promise<void> => {
	const {
		Project = "tsconfig.json",
		Source = "Source",
		Extension = DEFAULT_EXTENSIONS,
		Target,
	} = Option;

	const Config = loadTSConfig(Project);

	const Path = await resolvePaths({ Project, Source, Target }, Config);

	const changes = generateChanges(
		getFilesToProcess(Path.outPath, Extension),
		computeAliases(Path.basePath, Config?.options?.paths ?? {}),
		Path
	);
	applyChanges(changes);
};
