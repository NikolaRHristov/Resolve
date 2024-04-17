#!/usr/bin/env node

export const _Function = async () => {
	const options = (await (await import('@Function/Cre'))()).parse().opts<Interface>();

	const logger = new (await import("@Class/Logger.js")).default(
		options.Verbose ? "verbose" : "info"
	);

	logger.Verbose();
	logger.Param("options", options);

	try {
		const tsConfig = Load(options.Project);

		const { rootDir, outDir, baseUrl, paths } = tsConfig.options ?? {};

		logger.Param("compilerOptions", {
			rootDir,
			outDir,
			baseUrl,
			paths,
		});

		const programPaths = await Path(options, tsConfig);

		logger.Param("programPaths", programPaths);

		const aliases = await (
			await import("@Function/Compute.js")
		).default(programPaths.Base, tsConfig?.options?.paths ?? {});

		logger.Param("aliases", aliases);

		const files = await Get(programPaths.Target, options.Extension);

		logger.Param("filesToProcess", files);

		const changes = Generate(files, aliases, programPaths);

		logger.Param(
			"fileChanges",
			changes.map(({ File, Change }) => ({ file: File, changes: Change }))
		);

		if (options.NoEmit) {
			logger.Info(
				bold("Resolve:"),
				"discovered",
				changes.length,
				"file(s) for change (none actually changed since --noEmit was given)"
			);
		} else {
			(await import("@Function/Apply.js")).default(changes);

			logger.Info(bold("Resolve:"), "changed", changes.length, "file(s)");
		}
	} catch (_Error) {
		if (_Error instanceof (await import("@Class/Error/Step.js")).default) {
			logger.Error(
				`Error during step '${bold(_Error.Step)}'`,
				_Error.message
			);
		} else {
			throw _Error;
		}
	}
};

await _Function();

import type Interface from "@Interface/ProgramOptions.js";

import { bold } from "ansi-colors";

import Create from "@Function/Create.js";
import Generate from "@Function/Generate.js";
import Get from "@Function/Get.js";
import Load from "@Function/Load.js";
import Path from "@Function/Resolve/Path.js";
