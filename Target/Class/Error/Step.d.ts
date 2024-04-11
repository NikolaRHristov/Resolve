export default class extends Error {
    readonly step: string;
    constructor(step: string, message: string);
}
