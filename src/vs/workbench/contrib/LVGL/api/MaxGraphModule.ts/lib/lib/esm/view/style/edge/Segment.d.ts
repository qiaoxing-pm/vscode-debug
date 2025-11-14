import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Implements an orthogonal edge style.
 * Use {@link EdgeSegmentHandler} as an interactive handler for this style.
 *
 * This EdgeStyle is registered under `segmentEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'segment'
 * - isOrthogonal: true
 *
 * @param state {@link CellState} that represents the edge to be updated.
 * @param sourceScaled {@link CellState} that represents the source terminal.
 * @param targetScaled {@link CellState} that represents the target terminal.
 * @param controlHints List of relative control points.
 * @param result Array of {@link Point} that represent the actual points of the edge.
 */
export declare const SegmentConnector: EdgeStyleFunction;
