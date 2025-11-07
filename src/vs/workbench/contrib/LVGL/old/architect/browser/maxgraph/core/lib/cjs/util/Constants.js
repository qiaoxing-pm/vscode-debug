"use strict";
/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABSOLUTE_LINE_HEIGHT = exports.WORD_WRAP = exports.LINE_HEIGHT = exports.DEFAULT_TEXT_DIRECTION = exports.DEFAULT_FONTSIZE = exports.DEFAULT_FONTFAMILY = exports.OUTLINE_HANDLE_STROKECOLOR = exports.OUTLINE_HANDLE_FILLCOLOR = exports.LOCKED_HANDLE_FILLCOLOR = exports.CONNECT_HANDLE_FILLCOLOR = exports.LABEL_HANDLE_FILLCOLOR = exports.HANDLE_STROKECOLOR = exports.HANDLE_FILLCOLOR = exports.LABEL_HANDLE_SIZE = exports.HANDLE_SIZE = exports.OUTLINE_STROKEWIDTH = exports.OUTLINE_COLOR = exports.GUIDE_STROKEWIDTH = exports.GUIDE_COLOR = exports.EDGE_SELECTION_DASHED = exports.VERTEX_SELECTION_DASHED = exports.EDGE_SELECTION_STROKEWIDTH = exports.VERTEX_SELECTION_STROKEWIDTH = exports.VERTEX_SELECTION_COLOR = exports.EDGE_SELECTION_COLOR = exports.INVALID_COLOR = exports.VALID_COLOR = exports.DROP_TARGET_COLOR = exports.INVALID_CONNECT_TARGET_COLOR = exports.CONNECT_TARGET_COLOR = exports.HIGHLIGHT_COLOR = exports.HIGHLIGHT_OPACITY = exports.HIGHLIGHT_SIZE = exports.HIGHLIGHT_STROKEWIDTH = exports.OUTLINE_HIGHLIGHT_STROKEWIDTH = exports.OUTLINE_HIGHLIGHT_COLOR = exports.DEFAULT_INVALID_COLOR = exports.DEFAULT_VALID_COLOR = exports.TOOLTIP_VERTICAL_OFFSET = exports.SHADOW_OPACITY = exports.SHADOW_OFFSET_Y = exports.SHADOW_OFFSET_X = exports.SHADOWCOLOR = exports.NS_XLINK = exports.NS_SVG = exports.IDENTITY_FIELD_NAME = exports.MAX_HOTSPOT_SIZE = exports.MIN_HOTSPOT_SIZE = exports.DEFAULT_HOTSPOT = exports.VERSION = void 0;
exports.NODE_TYPE = exports.DIRECTION_MASK = exports.FONT_STYLE_MASK = exports.NONE = exports.PAGE_FORMAT_LETTER_LANDSCAPE = exports.PAGE_FORMAT_LETTER_PORTRAIT = exports.PAGE_FORMAT_A4_LANDSCAPE = exports.PAGE_FORMAT_A4_PORTRAIT = exports.ARROW_SIZE = exports.ARROW_WIDTH = exports.ARROW_SPACING = exports.LINE_ARCSIZE = exports.RECTANGLE_ROUNDING_FACTOR = exports.ENTITY_SEGMENT = exports.DEFAULT_IMAGESIZE = exports.DEFAULT_MARKERSIZE = exports.DEFAULT_STARTSIZE = exports.DEFAULT_FONTSTYLE = void 0;
/**
 * The version of the `maxGraph` library.
 */
// WARN: this constant is updated at release time by the script located at 'scripts/update-versions.mjs'.
// So, if you modify the name of this file or this constant, please update the script accordingly.
exports.VERSION = '0.21.0';
/**
 * Defines the portion of the cell which is to be used as a connectable
 * region. Default is 0.3. Possible values are 0 < x <= 1.
 */
exports.DEFAULT_HOTSPOT = 0.3;
/**
 * Defines the minimum size in pixels of the portion of the cell which is
 * to be used as a connectable region. Default is 8.
 */
exports.MIN_HOTSPOT_SIZE = 8;
/**
 * Defines the maximum size in pixels of the portion of the cell which is
 * to be used as a connectable region. Use 0 for no maximum. Default is 0.
 */
exports.MAX_HOTSPOT_SIZE = 0;
/**
 * Name of the field to be used to store the object ID.
 */
exports.IDENTITY_FIELD_NAME = 'mxObjectId';
/**
 * Defines the SVG namespace.
 */
exports.NS_SVG = 'http://www.w3.org/2000/svg';
/**
 * Defines the XLink namespace.
 */
exports.NS_XLINK = 'http://www.w3.org/1999/xlink';
/** Default value of {@link StyleDefaultsConfig.shadowColor}. */
exports.SHADOWCOLOR = 'gray';
/** Default value of {@link StyleDefaultsConfig.shadowOffsetX}. */
exports.SHADOW_OFFSET_X = 2;
/** Default value of {@link StyleDefaultsConfig.shadowOffsetY}. */
exports.SHADOW_OFFSET_Y = 3;
/** Default value of {@link StyleDefaultsConfig.shadowOpacity}. */
exports.SHADOW_OPACITY = 1;
/**
 * Defines the vertical offset for the tooltip.
 * Default is 16.
 */
exports.TOOLTIP_VERTICAL_OFFSET = 16;
/**
 * Specifies the default valid color. Default is #0000FF.
 */
exports.DEFAULT_VALID_COLOR = '#00FF00';
/**
 * Specifies the default invalid color. Default is #FF0000.
 */
exports.DEFAULT_INVALID_COLOR = '#FF0000';
/**
 * Specifies the default highlight color for shape outlines.
 * Default is #0000FF. This is used in {@link ConnectionHandler} and {@link EdgeHandler}.
 */
exports.OUTLINE_HIGHLIGHT_COLOR = '#00FF00';
/**
 * Defines the strokewidth to be used for shape outlines.
 * Default is 5. This is used in {@link ConnectionHandler} and {@link EdgeHandler}.
 */
exports.OUTLINE_HIGHLIGHT_STROKEWIDTH = 5;
/**
 * Defines the strokewidth to be used for the highlights.
 * Default is 3.
 */
exports.HIGHLIGHT_STROKEWIDTH = 3;
/**
 * Size of the constraint highlight (in px). Default is 2.
 */
exports.HIGHLIGHT_SIZE = 2;
/**
 * Opacity (in %) used for the highlights (including outline).
 * Default is 100.
 */
exports.HIGHLIGHT_OPACITY = 100;
/**
 * Defines the color to be used for the cell highlighting.
 * Use 'none' for no color. Default is #00FF00.
 */
// TODO this constants is unused (it wasn't used in mxGraph as well)--> remove it (and all documentation references as well)
exports.HIGHLIGHT_COLOR = '#00FF00';
/**
 * Defines the color to be used for highlighting a target cell for a new
 * or changed connection. Note that this may be either a source or
 * target terminal in the graph. Use 'none' for no color.
 * Default is #0000FF.
 */
// TODO this constants is unused (it wasn't used in mxGraph as well)--> remove it (and all documentation references as well)
exports.CONNECT_TARGET_COLOR = '#0000FF';
/**
 * Defines the color to be used for highlighting an invalid target cells
 * for a new or changed connections. Note that this may be either a source
 * or target terminal in the graph. Use 'none' for no color. Default is
 * #FF0000.
 */
exports.INVALID_CONNECT_TARGET_COLOR = '#FF0000';
/**
 * Defines the color to be used for the highlighting target parent cells
 * (for drag and drop). Use 'none' for no color. Default is #0000FF.
 */
exports.DROP_TARGET_COLOR = '#0000FF';
/**
 * Defines the color to be used for the coloring valid connection
 * previews. Use 'none' for no color. Default is #FF0000.
 */
exports.VALID_COLOR = '#00FF00';
/**
 * Defines the color to be used for the coloring invalid connection
 * previews. Use 'none' for no color. Default is #FF0000.
 */
exports.INVALID_COLOR = '#FF0000';
/**
 * Default value ('green' color) of {@link EdgeHandlerConfig.selectionColor}.
 */
exports.EDGE_SELECTION_COLOR = '#00FF00';
/**
 * Default value ('green' color) of {@link VertexHandlerConfig.selectionColor}.
 */
exports.VERTEX_SELECTION_COLOR = '#00FF00';
/**
 * Default value of {@link VertexHandlerConfig.selectionStrokeWidth}.
 */
exports.VERTEX_SELECTION_STROKEWIDTH = 1;
/**
 * Default value of {@link EdgeHandlerConfig.selectionStrokeWidth}.
 */
exports.EDGE_SELECTION_STROKEWIDTH = 1;
/**
 * Default value of {@link VertexHandlerConfig.selectionDashed}.
 */
exports.VERTEX_SELECTION_DASHED = true;
/**
 * Default value of {@link EdgeHandlerConfig.selectionDashed}.
 */
exports.EDGE_SELECTION_DASHED = true;
/**
 * Defines the color to be used for the guidelines in `Guide`.
 * @default #FF0000.
 */
exports.GUIDE_COLOR = '#FF0000';
/**
 * Defines the strokewidth to be used for the guidelines in `Guide`.
 * @default 1.
 */
exports.GUIDE_STROKEWIDTH = 1;
/**
 * Defines the color to be used for the outline rectangle
 * border.  Use 'none' for no color. Default is #0099FF.
 */
exports.OUTLINE_COLOR = '#0099FF';
/**
 * Defines the strokewidth to be used for the outline rectangle
 * stroke width. Default is 3.
 */
exports.OUTLINE_STROKEWIDTH = 3;
/**
 * Default value of {@link HandleConfig.size}.
 */
exports.HANDLE_SIZE = 6;
/**
 * Default value of {@link HandleConfig.labelSize}.
 */
exports.LABEL_HANDLE_SIZE = 4;
/**
 * Default value ('green' color) of {@link HandleConfig.fillColor}.
 */
exports.HANDLE_FILLCOLOR = '#00FF00';
/**
 * Default value of {@link HandleConfig.strokeColor}.
 */
exports.HANDLE_STROKECOLOR = 'black';
/**
 * Default value of {@link HandleConfig.labelFillColor}.
 */
exports.LABEL_HANDLE_FILLCOLOR = 'yellow';
/**
 * Default value ('blue' color) of {@link EdgeHandlerConfig.connectFillColor}.
 */
exports.CONNECT_HANDLE_FILLCOLOR = '#0000FF';
/**
 * Defines the color to be used for the locked handle fill color. Use
 * 'none' for no color. Default is #FF0000 (red).
 */
exports.LOCKED_HANDLE_FILLCOLOR = '#FF0000';
/**
 * Defines the color to be used for the outline sizer fill color. Use
 * 'none' for no color. Default is #00FFFF.
 */
exports.OUTLINE_HANDLE_FILLCOLOR = '#00FFFF';
/**
 * Defines the color to be used for the outline sizer stroke color. Use
 * 'none' for no color. Default is #0033FF.
 */
exports.OUTLINE_HANDLE_STROKECOLOR = '#0033FF';
/**
 * Defines the default family for all fonts. Default is Arial,Helvetica.
 */
exports.DEFAULT_FONTFAMILY = 'Arial,Helvetica';
/**
 * Defines the default size (in px). Default is 11.
 */
exports.DEFAULT_FONTSIZE = 11;
/**
 * Defines the default value for the <STYLE_TEXT_DIRECTION> if no value is
 * defined for it in the style. Default value is an empty string which means
 * the default system setting is used and no direction is set.
 */
exports.DEFAULT_TEXT_DIRECTION = '';
/**
 * Defines the default line height for text labels. Default is 1.2.
 */
exports.LINE_HEIGHT = 1.2;
/**
 * Defines the CSS value for the word-wrap property. Default is "normal".
 * Change this to "break-word" to allow long words to be able to be broken
 * and wrap onto the next line.
 */
exports.WORD_WRAP = 'normal';
/**
 * Specifies if absolute line heights should be used (px) in CSS. Default
 * is false. Set this to true for backwards compatibility.
 */
exports.ABSOLUTE_LINE_HEIGHT = false;
/**
 * Defines the default style for all fonts. Default is 0. This can be set
 * to any combination of font styles as follows.
 *
 * ```javascript
 * mxConstants.DEFAULT_FONTSTYLE = mxConstants.FONT_BOLD | mxConstants.FONT_ITALIC;
 * ```
 */
exports.DEFAULT_FONTSTYLE = 0;
/**
 * Defines the default start size for swimlanes. Default is 40.
 */
exports.DEFAULT_STARTSIZE = 40;
/**
 * Defines the default size for all markers. Default is 6.
 */
exports.DEFAULT_MARKERSIZE = 6;
/**
 * Defines the default width and height for images used in the
 * label shape. Default is 24.
 */
exports.DEFAULT_IMAGESIZE = 24;
/**
 * Default value of {@link EntityRelationConnectorConfig.segment}.
 */
exports.ENTITY_SEGMENT = 30;
/**
 * Defines the default rounding factor for the rounded vertices in percent between `0` and `1`.
 * Values should be smaller than `0.5`.
 * See {@link CellStateStyle.arcSize}.
 */
exports.RECTANGLE_ROUNDING_FACTOR = 0.15;
/**
 * Defines the default size in pixels of the arcs for the rounded edges and vertices.
 * See {@link CellStateStyle.arcSize}.
 */
exports.LINE_ARCSIZE = 20;
/**
 * Defines the spacing between the arrow shape and its terminals. Default is 0.
 */
exports.ARROW_SPACING = 0;
/**
 * Defines the width of the arrow shape. Default is 30.
 */
exports.ARROW_WIDTH = 30;
/**
 * Defines the size of the arrowhead in the arrow shape. Default is 30.
 */
exports.ARROW_SIZE = 30;
/**
 * Defines the rectangle for the A4 portrait page format.
 * The dimensions of this page format are 827x1169 pixels.
 */
exports.PAGE_FORMAT_A4_PORTRAIT = [0, 0, 827, 1169];
/**
 * Defines the rectangle for the A4 landscape page format.
 * The dimensions of this page format are 1169x827 pixels.
 */
exports.PAGE_FORMAT_A4_LANDSCAPE = [0, 0, 1169, 827];
/**
 * Defines the rectangle for the Letter portrait page format.
 * The dimensions of this page format are 850x1100 pixels.
 */
// It may not be used in @maxGraph/core for now, but helpful for users. So don't remove it.
exports.PAGE_FORMAT_LETTER_PORTRAIT = [0, 0, 850, 1100];
/**
 * Defines the rectangle for the Letter landscape page format.
 * The dimensions of this page format are 1100x850 pixels.
 */
// It may not be used in @maxGraph/core for now, but helpful for users. So don't remove it.
exports.PAGE_FORMAT_LETTER_LANDSCAPE = [0, 0, 1100, 850];
/**
 * Defines the value for none. Default is "none".
 */
exports.NONE = 'none';
exports.FONT_STYLE_MASK = {
    /** for bold fonts. */
    BOLD: 1,
    /** for italic fonts. */
    ITALIC: 2,
    /** for underlined fonts. */
    UNDERLINE: 4,
    /** for strikethrough fonts. */
    STRIKETHROUGH: 8,
};
/**
 * Bitwise mask for all directions.
 */
exports.DIRECTION_MASK = {
    /** No direction. */
    NONE: 0,
    WEST: 1,
    NORTH: 2,
    SOUTH: 4,
    EAST: 8,
    /** All directions. */
    ALL: 15,
};
/**
 * The values of {@link Node.nodeType}
 */
exports.NODE_TYPE = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12,
};
