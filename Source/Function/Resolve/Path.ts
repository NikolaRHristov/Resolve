import { dirname, resolve } from "path";

/**
 * Resolve paths provided to the program to absolute paths.
 *
 */
export const _Function = async (
	options: Pick<Interface, "Target" | "Project" | "Source">,
	tsConfig: TSConfig
): Promise<ProgramPaths> => {
	const { baseUrl = "", outDir, paths } = tsConfig.options ?? {};

	const Target = options.Target ?? outDir;

	if (!Target) {
		throw new (await import("@Class/Error/Step.js")).default(
			_Function.name,
			"Output directory must be specified using either the --out option or in tsconfig"
		);
	}

	if (!paths) {
		throw new (await import("@Class/Error/TSConfigPropertyError")).default(
			_Function.name,
			"compilerOptions.paths"
		);
	}

	const FileConfig = resolve(process.cwd(), options.Project);

	const PathConfig = dirname(FileConfig);

	return {
		Base: resolve(PathConfig, baseUrl),
		PathConfig: PathConfig,
		FileConfig: FileConfig,
		Source: resolve(options.Source ?? tsConfig?.options?.rootDir ?? "src"),
		Target: resolve(Target),
	};
};

export default _Function;

import type Interface from "../../Interface/ProgramOptions.js";
import type ProgramPaths from "../../Interface/ProgramPaths.js";
import type TSConfig from "../../Interface/TSConfig.js";
