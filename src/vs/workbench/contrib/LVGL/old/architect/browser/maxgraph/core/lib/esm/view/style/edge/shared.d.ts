import Point from '../../geometry/Point.js';
import type CellState from '../../cell/CellState.js';
/**
 * Scales an array of {@link Point}
 *
 * @param points array of {@link Point} to scale
 * @param scale the scaling to divide by
 * @private
 * @internal
 */
export declare function scalePointArray(points: Point[], scale: number): (Point | null)[] | null;
/**
 * Scales an {@link CellState}.
 *
 * @param state {@link CellState} to scale
 * @param scale the scaling to divide by
 */
export declare function scaleCellState(state: CellState | null, scale: number): CellState | null;
