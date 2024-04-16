export default class extends (await import("@Class/Error/Step.js")).default {
	public override readonly Step: string;
	public readonly Property: string;

	constructor(Step: string, Property: string) {
		super(Step, `${Property} is not set in tsconfig`);

		this.Step = Step;
		this.Property = Property;
	}
}
