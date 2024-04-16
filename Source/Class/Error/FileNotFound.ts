export default class extends (await import("@Class/Error/File.js")).default {
	constructor(Step: string, Path: string) {
		super(Step, Path, "Not found");
	}
}
