export default class extends Error {
	public readonly Step: string;

	constructor(Step: string, Message: string) {
		super(Message);

		this.Step = Step;
	}
}
