import ObjectCodec from './ObjectCodec.js';
/**
 * @private
 */
export declare const CodecRegistrationStates: Record<string, boolean>;
/**
 * @private
 */
export declare const registerBaseCodecs: (force?: boolean) => void;
export declare const createObjectCodec: (template: any, name: string) => ObjectCodec;
