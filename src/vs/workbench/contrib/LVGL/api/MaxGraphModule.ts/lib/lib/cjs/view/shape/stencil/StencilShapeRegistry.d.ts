import type StencilShape from './StencilShape.js';
import type { Registry } from '../../../types.js';
/**
 * A registry that stores the {@link StencilShape}s and their configuration.
 *
 * Here is an example showing how to add stencils:
 * ```javascript
 * const response = requestUtils.load('test/stencils.xml');
 * const root = response.getDocumentElement(); // <shapes> node
 * let shape = root.firstChild;
 *
 * while (shape) {
 *   if (shape.nodeType === constants.NODE_TYPE.ELEMENT) {
 *    StencilShapeRegistry.add(shape.getAttribute('name'), new StencilShape(shape));
 *  }
 *
 *  shape = shape.nextSibling;
 * }
 *
 * The XSD for the stencil description is available in the `stencils.xsd` file.
 * ```
 *
 * @category Configuration
 * @category Shape
 */
export declare const StencilShapeRegistry: Registry<StencilShape>;
