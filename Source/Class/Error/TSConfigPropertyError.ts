export class TSConfigPropertyError extends Step {
	constructor(
		public readonly step: string,
		public readonly property: string
	) {
		super(step, `${property} is not set in tsconfig`);
	}
}
