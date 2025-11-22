import type { EdgeStyleFunction } from '../../../types.js';
/**
 * ManhattanConnector code is based on code from https://github.com/mwangm/mxgraph-manhattan-connector
 *
 * Implements router to find the shortest route that avoids cells using manhattan distance as metric.
 *
 * This EdgeStyle is registered under `manhattanEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'segment'
 * - isOrthogonal: true
 */
export declare const ManhattanConnector: EdgeStyleFunction;
