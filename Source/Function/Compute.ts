import { resolve } from "path";

import type Alias from "@Interface/Alias.js";
import InvalidAliasError from "@Class/Error/InvalidAliasError";

/**
 * Compute the alias paths provided by the tsconfig.
 *
 */
export default (Base: string, Path: { [key: string]: string[] }): Alias[] => {
	const regex = /\*$/;

	const aliases: Alias[] = Object.keys(Path).map((Alias) => ({
		Alias: Alias,
		prefix: Alias.replace(regex, ""),
		aliasPaths: Path[Alias].map((Path: string) =>
			resolve(Base, Path.replace(regex, ""))
		),
	}));

	// Ensure that aliases do not start with a relative path
	// This will lead to unknown behaviour, and why would you use ./ or ../ as an alias anyway?
	for (const { alias } of aliases) {
		if (alias.startsWith("./") || alias.startsWith("../")) {
			throw new InvalidAliasError(computeAliases.name, alias);
		}
	}

	return aliases;
};
