/**
 * Load the tsconfig file using Typescript's built-in config file loader.
 *
 * @param path The path to the tsconfig file.
 *
 */
export const _Function = (path: string): TSConfig => {
	const NameConfig = findConfigFile(process.cwd(), sys.fileExists, path);

	if (!NameConfig) {
		throw new FileNotFoundError(_Function.name, path);
	}

	const directory = dirname(NameConfig);

	const options = parseJsonConfigFileContent(
		readConfigFile(NameConfig, sys.readFile).config,
		sys,
		directory
	);
	return options;
};

export default _Function;

import { dirname } from "path";
import {
	sys,
	findConfigFile,
	parseJsonConfigFileContent,
	readConfigFile,
} from "typescript";

import type TSConfig from "@Interface/TSConfig";
import FileNotFoundError from "@Class/Error/FileNotFound";
