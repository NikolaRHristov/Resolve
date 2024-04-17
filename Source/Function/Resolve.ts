#!/usr/bin/env node

import { bold } from "ansi-colors";

import Step from "@Class/Error/Step.js";
import Logger from "@Class/Logger.js";
import type Interface from "@Interface/ProgramOptions.js";

import Apply from "@Function/Apply.js";
import Compute from "@Function/Compute.js";
import Create from "@Function/Create.js";
import Generate from "@Function/Generate.js";
import Get from "@Function/Get.js";
import Load from "@Function/Load.js";
import Path from "@Function/Resolve/Path.js";

export const _Function = async () => {
	const options = (await Create()).parse().opts<Interface>();

	const logger = new Logger(options.Verbose ? "verbose" : "info");

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

		const aliases = Compute(
			programPaths.Base,
			tsConfig?.options?.paths ?? {}
		);

		logger.Param("aliases", aliases);

		const files = Get(programPaths.Target, options.Extension);

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
			Apply(changes);

			logger.Info(bold("Resolve:"), "changed", changes.length, "file(s)");
		}
	} catch (_Error) {
		if (_Error instanceof Step) {
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
