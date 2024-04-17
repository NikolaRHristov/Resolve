#!/usr/bin/env node

export const _Function = async () => {
	const Option = (await (await import("@Function/Create.js")).default())
		.parse()
		.opts<Interface>();

	const Logger = new (await import("@Class/Logger.js")).default(
		Option.Verbose ? "verbose" : "info"
	);

	Logger.Verbose();

	Logger.Param("options", Option);

	try {
		const tsConfig = (await import("@Function/Load.js")).default(
			Option.Project
		);

		const { rootDir, outDir, baseUrl, paths } = tsConfig.options ?? {};

		Logger.Param("compilerOptions", {
			rootDir,
			outDir,
			baseUrl,
			paths,
		});

		const programPaths = await (
			await import("@Function/Resolve/Path.js")
		).default(Option, tsConfig);

		Logger.Param("programPaths", programPaths);

		const aliases = await (
			await import("@Function/Compute.js")
		).default(programPaths.Base, tsConfig?.options?.paths ?? {});

		Logger.Param("aliases", aliases);

		const files = await (
			await import("@Function/Get.js")
		).default(programPaths.Target, Option.Extension);

		Logger.Param("filesToProcess", files);

		const changes = (await import("@Function/Generate.js")).default(
			files,
			aliases,
			programPaths
		);

		Logger.Param(
			"fileChanges",
			changes.map(({ File, Change }) => ({ file: File, changes: Change }))
		);

		if (Option.NoEmit) {
			Logger.Info(
				bold("Resolve:"),
				"discovered",
				changes.length,
				"file(s) for change (none actually changed since --noEmit was given)"
			);
		} else {
			(await import("@Function/Apply.js")).default(changes);

			Logger.Info(bold("Resolve:"), "changed", changes.length, "file(s)");
		}
	} catch (_Error) {
		if (_Error instanceof (await import("@Class/Error/Step.js")).default) {
			Logger.Error(
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

export const { bold } = await import("ansi-colors");
