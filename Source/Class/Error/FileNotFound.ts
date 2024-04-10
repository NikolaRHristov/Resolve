export class FileNotFoundError extends FileError {
	constructor(step: string, path: string) {
		super(step, path, `Not found`);
	}
}
