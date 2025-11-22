import type { StyleArrowValue } from '../../../types.js';
import type AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import type Shape from '../../shape/Shape.js';
import type Point from '../../geometry/Point.js';
/**
 * Generally used to create the "classic" and "block" marker factory methods.
 *
 * Here is an example the registration of a factory edge marker function with `createArrow`:
 * ```js
 * EdgeMarkerRegistry.add('classic', EdgeMarker.createArrow(2));
 * EdgeMarkerRegistry.add('blockThin', EdgeMarker.createArrow(3));
 * ```
 *
 * @since 0.18.0
 */
export declare const createArrow: (widthFactor: number) => (canvas: AbstractCanvas2D, _shape: Shape, type: StyleArrowValue, pe: Point, unitX: number, unitY: number, size: number, _source: boolean, sw: number, filled: boolean) => () => void;
/**
 * Generally used to create the "open" and "open thin" marker factory methods.
 *
 * Here is an example the registration of a factory edge marker function with `createOpenArrow`:
 * ```js
 * EdgeMarkerRegistry.add('open', createOpenArrow(2));
 * ```
 *
 * @since 0.18.0
 */
export declare const createOpenArrow: (widthFactor: number) => (canvas: AbstractCanvas2D, _shape: Shape, _type: StyleArrowValue, pe: Point, unitX: number, unitY: number, size: number, _source: boolean, sw: number, _filled: boolean) => () => void;
/**
 * @since 0.18.0
 */
export declare const oval: (canvas: AbstractCanvas2D, _shape: Shape, _type: StyleArrowValue, pe: Point, unitX: number, unitY: number, size: number, _source: boolean, _sw: number, filled: boolean) => () => void;
/**
 * Generally used to create the "diamond" and "diamond thin" marker factory methods.
 *
 * ```js
 * EdgeMarkerRegistry.add('diamond', diamond);
 * EdgeMarkerRegistry.add('diamondThin', diamond);
 * ```
 *
 * @since 0.18.0
 */
export declare const diamond: (canvas: AbstractCanvas2D, _shape: Shape, type: StyleArrowValue, pe: Point, unitX: number, unitY: number, size: number, _source: boolean, sw: number, filled: boolean) => () => void;
