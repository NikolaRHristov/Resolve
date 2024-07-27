/**
 * Get the files in the output directory that should be processed.
 *
 * @param Target The output directory.
 * @param Extension A list of extensions to match.
 */
export default async (Target: string, Extension: string[]) => {
	let Search = "*";

	if (Extension.length === 1) {
		Search = `*.${Extension[0]}`;
	} else if (Extension.length > 1) {
		Search = `*.{${Extension.join(",")}}`;
	}

	return await Promise.all(
		(
			await (
				await import("fast-glob")
			).default(
				`${(await import("@Function/Normalize")).default(
					Target,
				)}/**/${Search}`,
				{
					dot: true,
					onlyFiles: true,
				},
			)
		).map(async (Path) => (await import("path")).resolve(Path)),
	);
};
