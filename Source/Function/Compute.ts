import type Alias from "../Interface/Alias.js";

/**
 * Compute the alias paths provided by the tsconfig.
 *
 */
export const _Function = async (
	Base: string,
	Path: { [key: string]: string[] },
): Promise<Alias[]> => {
	const Alias: Alias[] = await Promise.all(
		Object.keys(Path).map(async (Alias) => ({
			Alias,
			Prefix: Alias.replace(Regex, ""),
			Path: await Promise.all(
				Path[Alias]?.map(async (Path: string) =>
					(await import("path")).resolve(
						Base,
						Path.replace(Regex, ""),
					),
				) ?? [],
			),
		})),
	);

	/**
	 * Ensure that aliases do not start with a relative path.
	 *
	 * This will lead to unknown behaviour, and why would you use ./ or ../ as an alias anyway?
	 */
	Alias.forEach(async ({ Alias }) => {
		if (Alias.startsWith("./") || Alias.startsWith("../")) {
			throw new (await import("@Class/Error/InvalidAliasError")).default(
				_Function.name,
				Alias,
			);
		}
	});

	return Alias;
};

export const Regex = /\*$/;

export default _Function;
