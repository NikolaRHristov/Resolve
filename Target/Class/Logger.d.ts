export type Level = "verbose" | "info" | "error";
export default class {
    readonly Level: Level;
    constructor(level: Level);
    Verbose(...args: (string | undefined)[]): void;
    Info(...args: (string | number)[]): void;
    Param<T extends {
        [key: string]: any;
    }>(title: string, params: T): void;
    Error(title: string, message: string): void;
}
export declare const bold: import("ansi-colors").StyleFunction, dim: import("ansi-colors").StyleFunction, green: import("ansi-colors").StyleFunction, red: import("ansi-colors").StyleFunction;
