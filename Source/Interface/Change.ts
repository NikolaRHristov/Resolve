import type { TextChange } from "@Interface/TextChange.js";

export interface Change {
	/** The source of the file being changed. */
	file: string;
	/** The new content of the file. */
	text: string;
	/** A list of text changes in the file. */
	changes?: TextChange[];
}
