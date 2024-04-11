/**
 * Normalize paths to resolve issues with paths on Windows.
 *
 * @see https://github.com/Playform/Resolve/pull/20
 * @see https://github.com/Playform/Resolve/pull/174
 *
 * @param path The path to normalize.
 */
declare const _default: (Path: string) => string;
export default _default;
