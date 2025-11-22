import type { DirectionValue } from '../../types.js';
/**
 * Configure the {@link EntityRelation} connector.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.15.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const EntityRelationConnectorConfig: {
    /**
     * Defines the length of the horizontal segment of an `Entity Relation`.
     * This can be overridden using {@link CellStateStyle.segment} style.
     * @default {@link ENTITY_SEGMENT}
     */
    segment: number;
};
/**
 * Resets {@link EntityRelationConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.15.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const resetEntityRelationConnectorConfig: () => void;
/**
 * Configure the {@link OrthConnector}.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const OrthogonalConnectorConfig: {
    /**
     * If the value is not set in {@link CellStateStyle.jettySize}, defines the jetty size of the connector.
     *
     * If the computed value of the jetty size coming from {@link CellStateStyle} is 'auto', it is used in the computation of the automatic jetty size.
     * See the implementation of {@link OrthConnector} for more details.
     *
     * @default 10
     */
    buffer: number;
    /**
     * See the implementation of {@link OrthConnector} for more details.
     * @default true
     */
    pointsFallback: boolean;
};
/**
 * Resets {@link OrthogonalConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const resetOrthogonalConnectorConfig: () => void;
/**
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
export type ManhattanConnectorConfigType = {
    /**
     * Limit for directions change when searching route.
     * @default 90
     */
    maxAllowedDirectionChange: number;
    /**
     * If number of route finding loops exceed the maximum, stops searching and returns fallback route
     */
    maxLoops: number;
    /**
     * Possible ending directions from an element.
     *
     * @default all directions
     */
    endDirections: DirectionValue[];
    /**
     * Possible starting directions from an element.
     *
     * @default all directions
     */
    startDirections: DirectionValue[];
    /**
     * Size of the step to find a route.
     *
     * @default 12
     */
    step: number;
};
/**
 * Configure the {@link ManhattanConnector}.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const ManhattanConnectorConfig: ManhattanConnectorConfigType;
/**
 * Resets {@link ManhattanConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
export declare const resetManhattanConnectorConfig: () => void;
