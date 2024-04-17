export default (path: string) => {
	try {
		return statSync(path).isDirectory();
	} catch (e) {
		return false;
	}
}
