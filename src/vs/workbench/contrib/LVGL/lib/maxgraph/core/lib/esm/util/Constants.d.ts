/**
 * The version of the `maxGraph` library.
 */
export declare const VERSION = "0.21.0";
/**
 * Defines the portion of the cell which is to be used as a connectable
 * region. Default is 0.3. Possible values are 0 < x <= 1.
 */
export declare const DEFAULT_HOTSPOT = 0.3;
/**
 * Defines the minimum size in pixels of the portion of the cell which is
 * to be used as a connectable region. Default is 8.
 */
export declare const MIN_HOTSPOT_SIZE = 8;
/**
 * Defines the maximum size in pixels of the portion of the cell which is
 * to be used as a connectable region. Use 0 for no maximum. Default is 0.
 */
export declare const MAX_HOTSPOT_SIZE = 0;
/**
 * Name of the field to be used to store the object ID.
 */
export declare const IDENTITY_FIELD_NAME = "mxObjectId";
/**
 * Defines the SVG namespace.
 */
export declare const NS_SVG = "http://www.w3.org/2000/svg";
/**
 * Defines the XLink namespace.
 */
export declare const NS_XLINK = "http://www.w3.org/1999/xlink";
/** Default value of {@link StyleDefaultsConfig.shadowColor}. */
export declare const SHADOWCOLOR = "gray";
/** Default value of {@link StyleDefaultsConfig.shadowOffsetX}. */
export declare const SHADOW_OFFSET_X = 2;
/** Default value of {@link StyleDefaultsConfig.shadowOffsetY}. */
export declare const SHADOW_OFFSET_Y = 3;
/** Default value of {@link StyleDefaultsConfig.shadowOpacity}. */
export declare const SHADOW_OPACITY = 1;
/**
 * Defines the vertical offset for the tooltip.
 * Default is 16.
 */
export declare const TOOLTIP_VERTICAL_OFFSET = 16;
/**
 * Specifies the default valid color. Default is #0000FF.
 */
export declare const DEFAULT_VALID_COLOR = "#00FF00";
/**
 * Specifies the default invalid color. Default is #FF0000.
 */
export declare const DEFAULT_INVALID_COLOR = "#FF0000";
/**
 * Specifies the default highlight color for shape outlines.
 * Default is #0000FF. This is used in {@link ConnectionHandler} and {@link EdgeHandler}.
 */
export declare const OUTLINE_HIGHLIGHT_COLOR = "#00FF00";
/**
 * Defines the strokewidth to be used for shape outlines.
 * Default is 5. This is used in {@link ConnectionHandler} and {@link EdgeHandler}.
 */
export declare const OUTLINE_HIGHLIGHT_STROKEWIDTH = 5;
/**
 * Defines the strokewidth to be used for the highlights.
 * Default is 3.
 */
export declare const HIGHLIGHT_STROKEWIDTH = 3;
/**
 * Size of the constraint highlight (in px). Default is 2.
 */
export declare const HIGHLIGHT_SIZE = 2;
/**
 * Opacity (in %) used for the highlights (including outline).
 * Default is 100.
 */
export declare const HIGHLIGHT_OPACITY = 100;
/**
 * Defines the color to be used for the cell highlighting.
 * Use 'none' for no color. Default is #00FF00.
 */
export declare const HIGHLIGHT_COLOR = "#00FF00";
/**
 * Defines the color to be used for highlighting a target cell for a new
 * or changed connection. Note that this may be either a source or
 * target terminal in the graph. Use 'none' for no color.
 * Default is #0000FF.
 */
export declare const CONNECT_TARGET_COLOR = "#0000FF";
/**
 * Defines the color to be used for highlighting an invalid target cells
 * for a new or changed connections. Note that this may be either a source
 * or target terminal in the graph. Use 'none' for no color. Default is
 * #FF0000.
 */
export declare const INVALID_CONNECT_TARGET_COLOR = "#FF0000";
/**
 * Defines the color to be used for the highlighting target parent cells
 * (for drag and drop). Use 'none' for no color. Default is #0000FF.
 */
export declare const DROP_TARGET_COLOR = "#0000FF";
/**
 * Defines the color to be used for the coloring valid connection
 * previews. Use 'none' for no color. Default is #FF0000.
 */
export declare const VALID_COLOR = "#00FF00";
/**
 * Defines the color to be used for the coloring invalid connection
 * previews. Use 'none' for no color. Default is #FF0000.
 */
export declare const INVALID_COLOR = "#FF0000";
/**
 * Default value ('green' color) of {@link EdgeHandlerConfig.selectionColor}.
 */
export declare const EDGE_SELECTION_COLOR = "#00FF00";
/**
 * Default value ('green' color) of {@link VertexHandlerConfig.selectionColor}.
 */
export declare const VERTEX_SELECTION_COLOR = "#00FF00";
/**
 * Default value of {@link VertexHandlerConfig.selectionStrokeWidth}.
 */
export declare const VERTEX_SELECTION_STROKEWIDTH = 1;
/**
 * Default value of {@link EdgeHandlerConfig.selectionStrokeWidth}.
 */
export declare const EDGE_SELECTION_STROKEWIDTH = 1;
/**
 * Default value of {@link VertexHandlerConfig.selectionDashed}.
 */
export declare const VERTEX_SELECTION_DASHED = true;
/**
 * Default value of {@link EdgeHandlerConfig.selectionDashed}.
 */
export declare const EDGE_SELECTION_DASHED = true;
/**
 * Defines the color to be used for the guidelines in `Guide`.
 * @default #FF0000.
 */
export declare const GUIDE_COLOR = "#FF0000";
/**
 * Defines the strokewidth to be used for the guidelines in `Guide`.
 * @default 1.
 */
export declare const GUIDE_STROKEWIDTH = 1;
/**
 * Defines the color to be used for the outline rectangle
 * border.  Use 'none' for no color. Default is #0099FF.
 */
export declare const OUTLINE_COLOR = "#0099FF";
/**
 * Defines the strokewidth to be used for the outline rectangle
 * stroke width. Default is 3.
 */
export declare const OUTLINE_STROKEWIDTH = 3;
/**
 * Default value of {@link HandleConfig.size}.
 */
export declare const HANDLE_SIZE = 6;
/**
 * Default value of {@link HandleConfig.labelSize}.
 */
export declare const LABEL_HANDLE_SIZE = 4;
/**
 * Default value ('green' color) of {@link HandleConfig.fillColor}.
 */
export declare const HANDLE_FILLCOLOR = "#00FF00";
/**
 * Default value of {@link HandleConfig.strokeColor}.
 */
export declare const HANDLE_STROKECOLOR = "black";
/**
 * Default value of {@link HandleConfig.labelFillColor}.
 */
export declare const LABEL_HANDLE_FILLCOLOR = "yellow";
/**
 * Default value ('blue' color) of {@link EdgeHandlerConfig.connectFillColor}.
 */
export declare const CONNECT_HANDLE_FILLCOLOR = "#0000FF";
/**
 * Defines the color to be used for the locked handle fill color. Use
 * 'none' for no color. Default is #FF0000 (red).
 */
export declare const LOCKED_HANDLE_FILLCOLOR = "#FF0000";
/**
 * Defines the color to be used for the outline sizer fill color. Use
 * 'none' for no color. Default is #00FFFF.
 */
export declare const OUTLINE_HANDLE_FILLCOLOR = "#00FFFF";
/**
 * Defines the color to be used for the outline sizer stroke color. Use
 * 'none' for no color. Default is #0033FF.
 */
export declare const OUTLINE_HANDLE_STROKECOLOR = "#0033FF";
/**
 * Defines the default family for all fonts. Default is Arial,Helvetica.
 */
export declare const DEFAULT_FONTFAMILY = "Arial,Helvetica";
/**
 * Defines the default size (in px). Default is 11.
 */
export declare const DEFAULT_FONTSIZE = 11;
/**
 * Defines the default value for the <STYLE_TEXT_DIRECTION> if no value is
 * defined for it in the style. Default value is an empty string which means
 * the default system setting is used and no direction is set.
 */
export declare const DEFAULT_TEXT_DIRECTION = "";
/**
 * Defines the default line height for text labels. Default is 1.2.
 */
export declare const LINE_HEIGHT = 1.2;
/**
 * Defines the CSS value for the word-wrap property. Default is "normal".
 * Change this to "break-word" to allow long words to be able to be broken
 * and wrap onto the next line.
 */
export declare const WORD_WRAP = "normal";
/**
 * Specifies if absolute line heights should be used (px) in CSS. Default
 * is false. Set this to true for backwards compatibility.
 */
export declare const ABSOLUTE_LINE_HEIGHT = false;
/**
 * Defines the default style for all fonts. Default is 0. This can be set
 * to any combination of font styles as follows.
 *
 * ```javascript
 * mxConstants.DEFAULT_FONTSTYLE = mxConstants.FONT_BOLD | mxConstants.FONT_ITALIC;
 * ```
 */
export declare const DEFAULT_FONTSTYLE = 0;
/**
 * Defines the default start size for swimlanes. Default is 40.
 */
export declare const DEFAULT_STARTSIZE = 40;
/**
 * Defines the default size for all markers. Default is 6.
 */
export declare const DEFAULT_MARKERSIZE = 6;
/**
 * Defines the default width and height for images used in the
 * label shape. Default is 24.
 */
export declare const DEFAULT_IMAGESIZE = 24;
/**
 * Default value of {@link EntityRelationConnectorConfig.segment}.
 */
export declare const ENTITY_SEGMENT = 30;
/**
 * Defines the default rounding factor for the rounded vertices in percent between `0` and `1`.
 * Values should be smaller than `0.5`.
 * See {@link CellStateStyle.arcSize}.
 */
export declare const RECTANGLE_ROUNDING_FACTOR = 0.15;
/**
 * Defines the default size in pixels of the arcs for the rounded edges and vertices.
 * See {@link CellStateStyle.arcSize}.
 */
export declare const LINE_ARCSIZE = 20;
/**
 * Defines the spacing between the arrow shape and its terminals. Default is 0.
 */
export declare const ARROW_SPACING = 0;
/**
 * Defines the width of the arrow shape. Default is 30.
 */
export declare const ARROW_WIDTH = 30;
/**
 * Defines the size of the arrowhead in the arrow shape. Default is 30.
 */
export declare const ARROW_SIZE = 30;
/**
 * Defines the rectangle for the A4 portrait page format.
 * The dimensions of this page format are 827x1169 pixels.
 */
export declare const PAGE_FORMAT_A4_PORTRAIT: number[];
/**
 * Defines the rectangle for the A4 landscape page format.
 * The dimensions of this page format are 1169x827 pixels.
 */
export declare const PAGE_FORMAT_A4_LANDSCAPE: number[];
/**
 * Defines the rectangle for the Letter portrait page format.
 * The dimensions of this page format are 850x1100 pixels.
 */
export declare const PAGE_FORMAT_LETTER_PORTRAIT: number[];
/**
 * Defines the rectangle for the Letter landscape page format.
 * The dimensions of this page format are 1100x850 pixels.
 */
export declare const PAGE_FORMAT_LETTER_LANDSCAPE: number[];
/**
 * Defines the value for none. Default is "none".
 */
export declare const NONE = "none";
export declare const FONT_STYLE_MASK: {
    /** for bold fonts. */
    readonly BOLD: 1;
    /** for italic fonts. */
    readonly ITALIC: 2;
    /** for underlined fonts. */
    readonly UNDERLINE: 4;
    /** for strikethrough fonts. */
    readonly STRIKETHROUGH: 8;
};
/**
 * Bitwise mask for all directions.
 */
export declare const DIRECTION_MASK: {
    /** No direction. */
    readonly NONE: 0;
    readonly WEST: 1;
    readonly NORTH: 2;
    readonly SOUTH: 4;
    readonly EAST: 8;
    /** All directions. */
    readonly ALL: 15;
};
/**
 * The values of {@link Node.nodeType}
 */
export declare const NODE_TYPE: {
    readonly ELEMENT: 1;
    readonly ATTRIBUTE: 2;
    readonly TEXT: 3;
    readonly CDATA: 4;
    readonly ENTITY_REFERENCE: 5;
    readonly ENTITY: 6;
    readonly PROCESSING_INSTRUCTION: 7;
    readonly COMMENT: 8;
    readonly DOCUMENT: 9;
    readonly DOCUMENT_TYPE: 10;
    readonly DOCUMENT_FRAGMENT: 11;
    readonly NOTATION: 12;
};
