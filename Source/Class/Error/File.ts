export default class FileError extends (await import("@Class/Error/Step.js"))
	.default {
	public override readonly Step;
	public readonly Path;

	constructor(Step: string, Path: string, Message: string) {
		super(Step, `Error processing ${Path}: ${Message}`);

		this.Step = Step;
		this.Path = Path;
	}
}
