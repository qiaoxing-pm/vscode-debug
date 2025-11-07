import ObjectCodec from '../ObjectCodec.js';
import { Stylesheet } from '../../view/style/Stylesheet.js';
import type Codec from '../Codec.js';
/**
 * Codec for {@link Stylesheet}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * @category Serialization with Codecs
 */
export declare class StylesheetCodec extends ObjectCodec {
    constructor();
    /**
     * Static global switch that specifies if the use of eval is allowed for evaluating text content.
     * Set this to `false` if stylesheets may contain user input.
     *
     * **WARNING**: Enabling this switch carries a possible security risk.
     *
     * @default false
     */
    static allowEval: boolean;
    /**
     * Encodes a stylesheet. See {@link decode} for a description of the format.
     */
    encode(enc: Codec, obj: Stylesheet): Element;
    /**
     * Returns the string for encoding the given value.
     */
    getStringValue(key: string, value: any): string | null;
    /**
     * Reads a sequence of the following child nodes and attributes:
     *
     * Child Nodes:
     * - `add` - Adds a new style.
     *
     * Attributes:
     * - `as` - Name of the style.
     * - `extend` - Name of the style to inherit from.
     *
     * Each node contains another sequence of add and remove nodes with the following attributes:
     * - `as` - Name of the style (see properties of {@link CellStateStyle}).
     * - `value` - Value for the style.
     *
     * Instead of the value-attribute, one can put Javascript expressions into the node as follows if {@link allowEval} is `true`:
     * <add as="perimeter">Perimeter.RectanglePerimeter</add>
     *
     * A remove node will remove the entry with the name given in the as-attribute from the style.
     *
     * Example:
     *
     * ```javascript
     * <Stylesheet as="stylesheet">
     *   <add as="text">
     *     <add as="fontSize" value="12"/>
     *   </add>
     *   <add as="defaultVertex" extend="text">
     *     <add as="shape" value="rectangle"/>
     *   </add>
     * </Stylesheet>
     * ```
     */
    decode(dec: Codec, _node: Element, into: any): any;
}
