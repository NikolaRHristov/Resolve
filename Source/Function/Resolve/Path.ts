import { resolve, dirname } from "path";

import { Step, TSConfigPropertyError } from "~/utils/errors";

import type { ProgramOptions, ProgramPaths, TSConfig } from "~/types";

/**
 * Resolve paths provided to the program to absolute paths.
 */
export function resolvePaths(
	options: Pick<ProgramOptions, "out" | "project" | "src">,
	tsConfig: TSConfig
): ProgramPaths {
	const { baseUrl = "", outDir, paths } = tsConfig.options ?? {};

	const out = options.out ?? outDir;
	if (!out) {
		throw new Step(
			resolvePaths.name,
			`Output directory must be specified using either the --out option or in tsconfig`
		);
	}

	if (!paths)
		throw new TSConfigPropertyError(
			resolvePaths.name,
			"compilerOptions.paths"
		);

	const configFile = resolve(process.cwd(), options.project);
	const configPath = dirname(configFile);
	const basePath = resolve(configPath, baseUrl);
	const srcPath = resolve(options.src ?? tsConfig?.options?.rootDir ?? "src");
	const outPath = resolve(out);

	return { basePath, configPath, configFile, srcPath, outPath };
}
