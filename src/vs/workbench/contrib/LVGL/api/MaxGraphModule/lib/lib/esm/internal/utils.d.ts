import { UserObject } from './types.js';
/**
 * @private
 */
export declare const doEval: (expression: string) => any;
/**
 * Returns true if the parameter is not `nullish` and its nodeType relates to an {@link Element}.
 * @private
 */
export declare const isElement: (node?: Node | UserObject | null) => node is Element;
/**
 * @private not part of the public API, can be removed or changed without prior notice
 */
export declare const isNullish: (v: string | object | null | undefined | number | boolean) => v is null | undefined;
/**
 * Merge a mixin into the destination
 * @param dest the destination class
 *
 * @private not part of the public API, can be removed or changed without prior notice
 */
export declare const mixInto: (dest: any) => (mixin: any) => void;
/**
 * @param value the value to check.
 * @param mask the binary mask to apply.
 * @returns `true` if the value matches the binary mask.
 * @private Subject to change prior being part of the public API.
 */
export declare const matchBinaryMask: (value: number | undefined | null, mask: number) => boolean;
