import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Implements a self-reference, aka. loop.
 *
 * This EdgeStyle is registered under `loopEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'elbow'
 * - isOrthogonal: false
 */
export declare const Loop: EdgeStyleFunction;
