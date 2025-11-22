import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Implements an entity relation style for edges (as used in database schema diagrams).
 *
 * At the time the function is called, the result array contains a placeholder (`null`) for the first absolute point,
 * that is, the point where the edge and source terminal are connected.
 *
 * The implementation of the style then adds all intermediate waypoints except for the last point,
 * that is, the connection point between the edge and the target terminal.
 *
 * The first and the last point in the result array are then replaced with Point that take into account the terminal's perimeter and next point on the edge.
 *
 * This EdgeStyle is registered under `entityRelationEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'default' or unset
 * - isOrthogonal: true
 *
 * @param state {@link CellState} that represents the edge to be updated.
 * @param source {@link CellState} that represents the source terminal.
 * @param target {@link CellState} that represents the target terminal.
 * @param _points
 * @param result Array of {@link Point} that represent the actual points of the edge.
 */
export declare const EntityRelation: EdgeStyleFunction;
