import type { EdgeStyleFunction } from '../../../types.js';
/**
 * Uses either {@link SideToSide} or {@link TopToBottom} depending on the horizontal flag in the cell style.
 * {@link SideToSide} is used if horizontal is `true` or unspecified.
 *
 * This EdgeStyle is registered under `elbowEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'elbow'
 * - isOrthogonal: true
 */
export declare const ElbowConnector: EdgeStyleFunction;
