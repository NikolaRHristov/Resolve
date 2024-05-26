import { Command } from "commander";

/**
 * Create the CLI program.
 *
 */
export default async () =>
	new Command()
		.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
		.name("Resolve")
		.addHelpText(
			"after",
			`
	Example:
	$ Resolve --project tsconfig.json --src ./src -out ./dist
`,
		)
		.option(
			"-p, --project <path>",
			"path to tsconfig file",
			"tsconfig.json",
		)
		.option("-s, --src <path>", "path to source directory")
		.option("-o, --out <path>", "path to output directory")
		.option(
			"--ext <extensions...>",
			"space-delimited list of file extensions to process",
			(await import("@Variable/Extension.js")).default,
		)
		.option("--verbose", "output logs", false)
		.option("--noEmit", "changes will not be emitted", false);
