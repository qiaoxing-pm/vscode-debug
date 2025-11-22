import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Implements a local orthogonal router between the given cells.
 *
 * This EdgeStyle is registered under `orthogonalEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'segment'
 * - isOrthogonal: true
 *
 * @param state {@link CellState} that represents the edge to be updated.
 * @param sourceScaled {@link CellState} that represents the source terminal.
 * @param targetScaled {@link CellState} that represents the target terminal.
 * @param controlHints List of relative control {@link Point}s.
 * @param result Array of {@link Point}s that represent the actual points of the edge.
 */
export declare const OrthogonalConnector: EdgeStyleFunction;
