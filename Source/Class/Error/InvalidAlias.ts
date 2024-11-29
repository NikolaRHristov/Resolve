export default class extends (await import("@Class/Error/Step.js")).default {
	public override readonly Step: string;

	public readonly Alias: string;

	constructor(Step: string, Alias: string) {
		super(Step, `The alias ${Alias} is not permitted`);

		this.Step = Step;

		this.Alias = Alias;
	}
}
