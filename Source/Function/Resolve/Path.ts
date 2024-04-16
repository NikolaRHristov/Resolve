import { dirname, resolve } from "path";

import Step from "@Class/Error/Step";
import TSConfigPropertyError from "@Class/Error/TSConfigPropertyError.js";

import type Interface from "@Interface/ProgramOptions.js";
import type ProgramPaths from "@Interface/ProgramPaths.js";
import type TSConfig from "@Interface/TSConfig.js";

/**
 * Resolve paths provided to the program to absolute paths.
 */
export const _Function = (
	options: Pick<Interface, "out" | "project" | "src">,
	tsConfig: TSConfig
): ProgramPaths => {
	const { baseUrl = "", outDir, paths } = tsConfig.options ?? {};

	const out = options.Out ?? outDir;

	if (!out) {
		throw new Step(
			_Function.name,
			"Output directory must be specified using either the --out option or in tsconfig"
		);
	}

	if (!paths) {
		throw new TSConfigPropertyError(
			_Function.name,
			"compilerOptions.paths"
		);
	}

	const configFile = resolve(process.cwd(), options.Project);

	const configPath = dirname(configFile);

	const basePath = resolve(configPath, baseUrl);

	const srcPath = resolve(options.Source ?? tsConfig?.options?.rootDir ?? "src");

	const outPath = resolve(out);

	return { Base: basePath, PathConfig: configPath, FileConfig: configFile, Source: srcPath, Target: outPath };
};

export default _Function;
