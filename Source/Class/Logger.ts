import { bold, dim, green, red } from "ansi-colors";

export type Level = "verbose" | "info" | "error";

export default class {
	public readonly Level;

	constructor(level: Level) {
		this.Level = level;
	}

	verbose(...args: (string | undefined)[]) {
		if (this.Level === "verbose") {
			console.log(...args);
		}
	}

	info(...args: (string | number)[]) {
		if (["verbose", "info"].includes(this.Level)) {
			console.log(...args);
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny:
	error(...args: any[]) {
		console.error(...args.map((x) => red(x)));
	}

	// biome-ignore lint/suspicious/noExplicitAny:
	fancyParams<T extends { [key: string]: any }>(title: string, params: T) {
		this.verbose(bold(title));

		const keys = Object.keys(params);

		const isArray = Array.isArray(params);

		if (keys.length === 0) {
			this.verbose(dim("empty"));
		} else {
			for (const key of keys) {
				// biome-ignore lint/suspicious/noExplicitAny:
				let value = params[key as keyof typeof params] as any;
				if (typeof value === "string") {
					value = green(value);
				}

				if (isArray) {
					this.verbose(value);
				} else {
					this.verbose(key, "->", value);
				}
			}
		}
		this.verbose();
	}

	fancyError(title: string, message: string) {
		console.error();

		console.error(red.bold(title));

		console.error(message);

		console.error();
	}
}
