export default class extends Error {
    readonly Step: string;
    constructor(Step: string, Message: string);
}
