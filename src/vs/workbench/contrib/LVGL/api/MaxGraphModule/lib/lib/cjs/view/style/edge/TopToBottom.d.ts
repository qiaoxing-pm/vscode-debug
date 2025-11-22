import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Implements a vertical elbow edge.
 *
 * This EdgeStyle is registered under `topToBottomEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'elbow'
 * - isOrthogonal: true
 */
export declare const TopToBottom: EdgeStyleFunction;
