export default (path: string) => {
	try {
		return statSync(path).isDirectory();
	} catch (_Error) {
		return false;
	}
}
