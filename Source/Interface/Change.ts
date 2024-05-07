export default interface Interface {
	/** The source of the file being changed. */
	File: string;

	/** The new content of the file. */
	Text: string;

	/** A list of text changes in the file. */
	Change?: TextChange[];
}

import type TextChange from "../Interface/TextChange.js";
