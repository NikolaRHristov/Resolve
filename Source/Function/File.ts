export default (path: string) => {
	try {
		return statSync(path).isFile();
	} catch (e) {
		return false;
	}
};
