import ObjectCodec from '../ObjectCodec.js';
import GraphDataModel from '../../view/GraphDataModel.js';
import Cell from '../../view/cell/Cell.js';
import type Codec from '../Codec.js';
/**
 * Codec for {@link GraphDataModel}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * @category Serialization with Codecs
 */
export declare class ModelCodec extends ObjectCodec {
    constructor();
    /**
     * Encodes the given {@link GraphDataModel} by writing a (flat) XML sequence of cell nodes as produced by the {@link CellCodec}.
     * The sequence is wrapped-up in a node with the name `root`.
     */
    encodeObject(enc: Codec, obj: Cell, node: Element): void;
    /**
     * Overrides decode child to handle special child nodes.
     */
    decodeChild(dec: Codec, child: Element, obj: Cell | GraphDataModel): void;
    /**
     * Reads the cells into the graph model. All cells are children of the root element in the node.
     */
    decodeRoot(dec: Codec, root: Element, model: GraphDataModel): void;
}
