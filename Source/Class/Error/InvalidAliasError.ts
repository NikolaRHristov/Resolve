export class InvalidAliasError extends Step {
	constructor(
		public readonly step: string,
		public readonly alias: string
	) {
		super(step, `The alias ${alias} is not permitted`);
	}
}
