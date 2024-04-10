export default class extends Error {
	constructor(
		public readonly step: string,
		message: string
	) {
		super(message);
	}
}
