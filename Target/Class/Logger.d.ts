export type LoggerLevel = "verbose" | "info" | "error";
export default class {
    readonly level: LoggerLevel;
    constructor(level: LoggerLevel);
    verbose(...args: (string | undefined)[]): void;
    info(...args: (string | number)[]): void;
    error(...args: any[]): void;
    fancyParams<T extends {
        [key: string]: any;
    }>(title: string, params: T): void;
    fancyError(title: string, message: string): void;
}
