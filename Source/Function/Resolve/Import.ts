/**
 * Find the file that will be imported by the given import path.
 *
 * @param importPath An non-relative import path
 *
 */
export default async (Path: string) => {
	const Import = Path.replace(/\.[^/.]*js[^/.]*$/, (match) =>
		match.replace("js", "ts"),
	);

	const Existing = [
		Path,
		Import,
		...Module.map(
			(ext) => `${Path.replace(/\.[^/.]*(js|json)[^/.]*$/, "")}${ext}`,
		),
	].find((path) => File(path));

	if (Existing) {
		return {
			Import: Path,
			File: Existing,
			Type: "file" as const,
		};
	}

	// Try index files if the path is a directory
	const Index = (await import("@Function/Directory")).default(Path)
		? Module.map((ext) => `${Path}/index${ext}`)
		: [].find(async (path) => File(path));

	if (Index) {
		return {
			Import: Path,
			File: Index,
			Type: "directory" as const,
		};
	}

	return null;
};

export const { default: File } = await import("@Function/File.js");

export const Module = [
	".js",
	".jsx",
	".ts",
	".tsx",
	".cjs",
	".mjs",
	".mdx",
	".d.ts",
	".json",
];
