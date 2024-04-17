declare const FileError_base: typeof import("@Class/Error/Step.js").default;
export default class FileError extends FileError_base {
    readonly Step: string;
    readonly Path: string;
    constructor(Step: string, Path: string, Message: string);
}
export {};
