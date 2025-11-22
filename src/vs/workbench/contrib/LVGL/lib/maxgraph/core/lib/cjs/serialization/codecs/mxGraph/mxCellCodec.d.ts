import { CellCodec } from '../CellCodec.js';
import type Codec from '../../Codec.js';
/**
 * Add support for the legacy `mxGraph` format of {@link Cell}.
 *
 * @category Serialization with Codecs
 */
export declare class mxCellCodec extends CellCodec {
    getName(): string;
    decodeAttribute(dec: Codec, attr: any, obj?: any): void;
}
