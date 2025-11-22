/**
 * Describes {@link EdgeHandlerConfig}.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export type EdgeHandlerConfigType = {
    /**
     * Specifies if adding bends by shift-click is enabled.
     *
     * **Note**: This experimental feature is not recommended for production use.
     * @default false
     * @since 0.15.0
     */
    addBendOnShiftClickEnabled: boolean;
    /**
     * Defines the color to be used for the connect handle fill color. Use `none` for no color.
     * @default {@link CONNECT_HANDLE_FILLCOLOR}
     */
    connectFillColor: string;
    /**
     * Defines the cursor for a movable bend.
     * @default 'crosshair'
     * @since 0.20.0
     */
    cursorBend: string;
    /**
     * Defines the cursor for a movable edge.
     * @default 'move'
     * @since 0.20.0
     */
    cursorMovable: string;
    /**
     * Defines the cursor for a terminal handle.
     * @default 'pointer'
     * @since 0.20.0
     */
    cursorTerminal: string;
    /**
     * Defines the cursor for a movable virtural bend.
     * @default 'crosshair'
     * @since 0.20.0
     */
    cursorVirtualBend: string;
    /**
     * Kind of shape to be used for edge handles.
     * @default 'square'
     */
    handleShape: 'circle' | 'square';
    /**
     * Specifies if removing bends by shift-click is enabled.
     *
     * **Note**: This experimental feature is not recommended for production use.
     * @default false
     * @since 0.15.0
     */
    removeBendOnShiftClickEnabled: boolean;
    /**
     * Defines the default color to be used for the selection border of edges. Use `none` for no color.
     * @default {@link EDGE_SELECTION_COLOR}
     */
    selectionColor: string;
    /**
     * Defines the default dashed state to be used for the edge selection border.
     * @default {@link EDGE_SELECTION_DASHED}
     */
    selectionDashed: boolean;
    /**
     * Defines the default stroke width to be used for edge selections.
     * @default {@link EDGE_SELECTION_STROKEWIDTH}
     */
    selectionStrokeWidth: number;
    /**
     * Opacity to be used for virtual bends (see {@link virtualBendsEnabled}).
     * @default 20
     * @since 0.15.0
     */
    virtualBendOpacity: number;
    /**
     * Specifies if virtual bends should be added in the center of each segment.
     * These bends can then be used to add new waypoints.
     * @default false
     * @since 0.15.0
     */
    virtualBendsEnabled: boolean;
};
/**
 * Global configuration for {@link EdgeHandler} (including subclasses).
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const EdgeHandlerConfig: EdgeHandlerConfigType;
/**
 * Resets {@link EdgeHandlerConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const resetEdgeHandlerConfig: () => void;
/**
 * Global configuration for handles, used {@link VertexHandler} and {@link EdgeHandler} (including subclasses).
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const HandleConfig: {
    /**
     * Defines the default color to be used for the handle fill color. Use `none` for no color.
     * @default {@link HANDLE_FILLCOLOR}
     */
    fillColor: string;
    /**
     * Defines the cursor to be used for the label handle.
     * @default 'default'
     * @since 0.20.0
     */
    labelCursor: string;
    /**
     * Defines the color to be used for the label handle fill color. Use `none` for no color.
     * @default {@link LABEL_HANDLE_FILLCOLOR}
     */
    labelFillColor: string;
    /**
     * Defines the default size for label handles.
     * @default {@link LABEL_HANDLE_SIZE}
     */
    labelSize: number;
    /**
     * Defines the default size for handles.
     * @default {@link HANDLE_SIZE}
     */
    size: number;
    /**
     * Defines the default color to be used for the handle stroke color. Use `none` for no color.
     * @default {@link HANDLE_STROKECOLOR}
     */
    strokeColor: string;
};
/**
 * Resets {@link HandleConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const resetHandleConfig: () => void;
/**
 * Global configuration for {@link VertexHandler}.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.12.0
 * @category Configuration
 */
export declare const VertexHandlerConfig: {
    /**
     * Defines the cursor for a movable vertex.
     * @since 0.20.0
     */
    cursorMovable: string;
    /**
     * Enable rotation handle
     * @default false
     */
    rotationEnabled: boolean;
    /**
     * Defines the default color to be used for the selection border of vertices. Use `none` for no color.
     * @default {@link VERTEX_SELECTION_COLOR}
     * @since 0.14.0
     */
    selectionColor: string;
    /**
     * Defines the default stroke width to be used for vertex selections.
     * @default {@link VERTEX_SELECTION_STROKEWIDTH}
     * @since 0.14.0
     */
    selectionStrokeWidth: number;
    /**
     * Defines the default dashed state to be used for the vertex selection border.
     * @default {@link VERTEX_SELECTION_DASHED}
     * @since 0.14.0
     */
    selectionDashed: boolean;
};
/**
 * Resets {@link VertexHandlerConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const resetVertexHandlerConfig: () => void;
