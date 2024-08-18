/**
 * Load the tsconfig file using Typescript's built-in config file loader.
 *
 * @param Path The path to the tsconfig file.
 *
 */
export const _Function = async (Path: string): Promise<TSConfig> => {
	const NameConfig = (await import("typescript")).findConfigFile(
		process.cwd(),
		sys.fileExists,
		Path,
	);

	if (!NameConfig) {
		throw new (await import("@Class/Error/FileNotFound.js")).default(
			_Function.name,
			Path,
		);
	}

	return (await import("typescript")).parseJsonConfigFileContent(
		(await import("typescript")).readConfigFile(NameConfig, sys.readFile)
			.config,
		sys,
		(await import("path")).dirname(NameConfig),
	);
};

export default _Function;

export const { sys } = await import("typescript");

import type TSConfig from "../Interface/TSConfig.tsx";
