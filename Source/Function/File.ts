export default async (path: string) => {
	try {
		return (await (await import("fs/promises")).stat(path)).isFile();
	} catch (_Error) {
		return false;
	}
};
