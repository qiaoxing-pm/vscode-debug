import ObjectCodec from '../../ObjectCodec.js';
import type Codec from '../../Codec.js';
import EditorPopupMenu from '../../../editor/EditorPopupMenu.js';
/**
 * Custom codec for configuring {@link EditorPopupMenu}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * This codec only reads configuration data for existing popup menus, it does not encode or create menus.
 * Note that this codec only passes the configuration node to the popup menu, which uses the config to dynamically create menus.
 *
 * @see {@link EditorPopupMenu.createMenu}.
 * @category Serialization with Codecs
 */
export declare class EditorPopupMenuCodec extends ObjectCodec {
    constructor();
    /**
     * Returns null.
     */
    encode(_enc: Codec, _obj: Element): Element | null;
    /**
     * Uses the given node as the config for {@link EditorPopupMenu}.
     */
    decode(dec: Codec, node: Element, into: EditorPopupMenu): EditorPopupMenu;
}
