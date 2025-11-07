/**
 * If `baseTimestamp` is provided and not zero, returns a message describing the elapsed milliseconds since this value.
 * Otherwise, returns an empty string.
 * @param baseTimestamp the base timestamp to compute the elapsed milliseconds from
 *
 * @private not part of the public API, can be removed or changed without prior notice
 */
export declare const getElapseMillisecondsMessage: (baseTimestamp?: number) => string;
