export class FileError extends Step {
	constructor(
		public readonly step: string,
		public readonly path: string,
		message: string
	) {
		super(step, `Error processing ${path}: ${message}`);
	}
}
