import ObjectCodec from '../ObjectCodec.js';
import type { AbstractGraph } from '../../view/AbstractGraph.js';
export declare const excludedFields: Array<keyof AbstractGraph>;
/**
 * Codec for {@link Graph}s.
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * Transient Fields:
 *
 * - eventListeners
 * - view
 * - container
 * - cellRenderer
 * - selectionModel
 * - plugins
 *
 * @category Serialization with Codecs
 */
export declare class GraphCodec extends ObjectCodec {
    constructor();
}
