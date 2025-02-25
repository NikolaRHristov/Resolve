export default async (path: string) => {
	try {
		return (await (await import("node:fs/promises")).stat(path)).isFile();
	} catch (_Error) {
		return false;
	}
};
