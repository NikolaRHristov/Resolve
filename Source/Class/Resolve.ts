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

export const main = () => {
	const options = Create().parse().opts<Interface>();

	const logger = new Logger(options.Verbose ? "verbose" : "info");

	logger.verbose();
	logger.fancyParams("options", options);

	try {
		const tsConfig = Load(options.Project);

		const { rootDir, outDir, baseUrl, paths } = tsConfig.options ?? {};

		logger.fancyParams("compilerOptions", {
			rootDir,
			outDir,
			baseUrl,
			paths,
		});

		const programPaths = Path(options, tsConfig);

		logger.fancyParams("programPaths", programPaths);

		const aliases = Compute(
			programPaths.Base,
			tsConfig?.options?.paths ?? {}
		);

		logger.fancyParams("aliases", aliases);

		const files = Get(programPaths.Target, options.Extension);

		logger.fancyParams("filesToProcess", files);

		const changes = Generate(files, aliases, programPaths);

		logger.fancyParams(
			"fileChanges",
			changes.map(({ file, changes }) => ({ file, changes }))
		);

		if (options.NoEmit) {
			logger.info(
				bold("Resolve:"),
				"discovered",
				changes.length,
				"file(s) for change (none actually changed since --noEmit was given)"
			);
		} else {
			Apply(changes);

			logger.info(bold("Resolve:"), "changed", changes.length, "file(s)");
		}
	} catch (_Error) {
		if (_Error instanceof Step) {
			logger.fancyError(
				`Error during step '${bold(_Error.Step)}'`,
				_Error.message
			);
		} else {
			throw _Error;
		}
	}
};

main();
