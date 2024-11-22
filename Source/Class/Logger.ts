export type Level = "verbose" | "info" | "error";

export default class {
	public readonly Level;

	constructor(level: Level) {
		this.Level = level;
	}

	Verbose(...args: (string | undefined)[]) {
		if (this.Level === "verbose") {
			console.log(...args);
		}
	}

	Info(...args: (string | number)[]) {
		if (["verbose", "info"].includes(this.Level)) {
			console.log(...args);
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny:
	Param<T extends { [key: string]: any }>(title: string, params: T) {
		this.Verbose(bold(title));

		const keys = Object.keys(params);

		const isArray = Array.isArray(params);

		if (keys.length === 0) {
			this.Verbose(dim("empty"));
		} else {
			for (const key of keys) {
				// biome-ignore lint/suspicious/noExplicitAny:
				let value = params[key as keyof typeof params] as any;

				if (typeof value === "string") {
					value = green(value);
				}

				if (isArray) {
					this.Verbose(value);
				} else {
					this.Verbose(key, "->", value);
				}
			}
		}

		this.Verbose();
	}

	Error(title: string, message: string) {
		console.error(red.bold(title));

		console.error(message);
	}
}

export const { bold, dim, green, red } = (await import("ansi-colors")).default;
