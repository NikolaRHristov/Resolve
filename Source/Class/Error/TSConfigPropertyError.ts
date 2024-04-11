export default class extends (await import("@Class/Error/Step.js")).default {
	constructor(
		public override readonly step: string,
		public readonly property: string
	) {
		super(step, `${property} is not set in tsconfig`);
	}
}
