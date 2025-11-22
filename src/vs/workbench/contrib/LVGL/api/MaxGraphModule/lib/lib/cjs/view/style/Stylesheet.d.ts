import type { CellStateStyle, CellStyle } from '../../types.js';
/**
 * Defines the appearance of the cells in a graph. See {@link putCellStyle} for an example
 * of creating a new cell style.
 *
 * Existing styles can be cloned using {@link clone} and turned into a string for debugging
 * using {@link toString}.
 *
 * ### Default Styles
 *
 * The stylesheet contains two built-in styles, which are used if no style is defined for
 * a cell:
 *
 * - `defaultVertex`: default style for vertices
 * - `defaultEdge`: default style for edges
 *
 * ### Example
 *
 * ```javascript
 * const defaultVertexStyle = stylesheet.getDefaultVertexStyle();
 * defaultVertexStyle.rounded = true;
 * const defaultEdgeStyle = stylesheet.getDefaultEdgeStyle();
 * defaultEdgeStyle.edgeStyle = EdgeStyle.EntityRelation;
 * ```
 *
 * @category Style
 */
export declare class Stylesheet {
    constructor();
    /**
     * Maps from names to cell styles. Each cell style is a map of key,
     * value pairs.
     */
    styles: Map<string, CellStateStyle>;
    /**
     * Creates and returns the default vertex style.
     */
    createDefaultVertexStyle(): CellStateStyle;
    /**
     * Creates and returns the default edge style.
     */
    createDefaultEdgeStyle(): CellStateStyle;
    /**
     * Sets the default style for vertices using `defaultVertex` as the style name.
     * @param style The style to be stored.
     */
    putDefaultVertexStyle(style: CellStateStyle): void;
    /**
     * Sets the default style for edges using `defaultEdge` as the style name.
     * @param style The style to be stored.
     */
    putDefaultEdgeStyle(style: CellStateStyle): void;
    /**
     * Returns the default style for vertices.
     */
    getDefaultVertexStyle(): CellStateStyle;
    /**
     * Returns the default style for edges.
     */
    getDefaultEdgeStyle(): CellStateStyle;
    /**
     * Stores the given {@link CellStateStyle} under the given name in {@link styles}.
     *
     * ### Example
     *
     * The following example adds a new style called `rounded` into an existing stylesheet:
     *
     * ```javascript
     * const style = {} as CellStateStyle;
     * style.shape = 'rectangle';
     * style.perimeter = 'rectanglePerimeter';
     * style.rounded = true;
     * graph.getStylesheet().putCellStyle('rounded', style);
     * ```
     *
     * ### Description
     *
     * Note that not all properties will be interpreted by all shapes. For example, the 'line' shape ignores the fill color.
     * The final call to this method associates the style with a name in the stylesheet.
     *
     * The style is used in a cell with the following code:
     * ```javascript
     * // model is an instance of GraphDataModel
     * // style is an instance of CellStyle
     * model.setStyle(cell, { baseStyleNames: ['rounded'] });
     * ```
     *
     * @param name Name for the style to be stored.
     * @param style The instance of the style to be stored.
     */
    putCellStyle(name: string, style: CellStateStyle): void;
    /**
     * Returns a {@link CellStateStyle} computed by merging the default style, styles referenced in the specified `baseStyleNames`
     * and the properties of the `cellStyle` parameter.
     *
     * The properties are merged by taking the properties from various styles in the following order:
     *   - default style (if {@link CellStyle.ignoreDefaultStyle} is not set to `true`, otherwise it is ignored)
     *   - registered styles referenced in `baseStyleNames`, in the order of the array
     *   - `cellStyle` parameter
     *
     * To fully unset a style property i.e. the property is not set even if a value is set in the default style or in the referenced styles,
     * set the `cellStyle` property to `none`. For example. `cellStyle.fillColor = 'none'`
     *
     * @param cellStyle An object that represents the style.
     * @param defaultStyle Default style used as reference to compute the returned style.
     */
    getCellStyle(cellStyle: CellStyle, defaultStyle: CellStateStyle): {
        absoluteArcSize?: boolean;
        align?: import("../../types.js").AlignValue;
        anchorPointDirection?: boolean;
        arcSize?: number;
        aspect?: string;
        autoSize?: boolean;
        backgroundOutline?: boolean;
        bendable?: boolean;
        cloneable?: boolean;
        curved?: boolean;
        dashed?: boolean;
        dashPattern?: string;
        deletable?: boolean;
        direction?: import("../../types.js").DirectionValue;
        edgeStyle?: import("../../types.js").StyleEdgeStyleValue;
        editable?: boolean;
        elbow?: import("../../types.js").ElbowValue;
        endArrow?: import("../../types.js").StyleArrowValue;
        endFill?: boolean;
        endFillColor?: import("../../types.js").ColorValue;
        endStrokeColor?: import("../../types.js").ColorValue;
        endSize?: number;
        entryDx?: number;
        entryDy?: number;
        entryPerimeter?: boolean;
        entryX?: number;
        entryY?: number;
        exitDx?: number;
        exitDy?: number;
        exitPerimeter?: boolean;
        exitX?: number;
        exitY?: number;
        fillColor?: import("../../types.js").SpecialStyleColorValue;
        fillOpacity?: number;
        fixDash?: boolean;
        flipH?: boolean;
        flipV?: boolean;
        foldable?: boolean;
        fontColor?: import("../../types.js").SpecialStyleColorValue;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: number;
        glass?: boolean;
        gradientColor?: import("../../types.js").SpecialStyleColorValue;
        gradientDirection?: import("../../types.js").DirectionValue;
        horizontal?: boolean;
        image?: string;
        imageAlign?: import("../../types.js").AlignValue;
        imageAspect?: boolean;
        imageBackground?: import("../../types.js").ColorValue;
        imageBorder?: import("../../types.js").ColorValue;
        imageHeight?: number;
        imageWidth?: number;
        indicatorColor?: import("../../types.js").ColorValue;
        indicatorDirection?: import("../../types.js").DirectionValue;
        indicatorHeight?: number;
        indicatorImage?: string;
        indicatorShape?: import("../../types.js").StyleShapeValue;
        indicatorStrokeColor?: import("../../types.js").ColorValue;
        indicatorWidth?: number;
        jettySize?: number | "auto";
        labelBackgroundColor?: import("../../types.js").ColorValue;
        labelBorderColor?: import("../../types.js").ColorValue;
        labelPadding?: number;
        labelPosition?: import("../../types.js").AlignValue | "ignore";
        labelWidth?: number;
        loopStyle?: import("../../types.js").EdgeStyleFunction;
        margin?: number;
        movable?: boolean;
        noEdgeStyle?: boolean;
        noLabel?: boolean;
        opacity?: number;
        orthogonal?: boolean | null;
        orthogonalLoop?: boolean;
        overflow?: import("../../types.js").OverflowValue;
        perimeter?: import("../../types.js").PerimeterFunction | import("../../types.js").PerimeterValue | (string & {}) | null;
        perimeterSpacing?: number;
        pointerEvents?: boolean;
        portConstraint?: import("../../types.js").StylePortConstraint;
        portConstraintRotation?: boolean;
        resizable?: boolean;
        resizeHeight?: boolean;
        resizeWidth?: boolean;
        rotatable?: boolean;
        rotation?: number;
        rounded?: boolean;
        routingCenterX?: number;
        routingCenterY?: number;
        segment?: number;
        separatorColor?: import("../../types.js").ColorValue;
        shadow?: boolean;
        shape?: import("../../types.js").StyleShapeValue;
        sourceJettySize?: number | "auto";
        sourcePerimeterSpacing?: number;
        sourcePort?: string;
        sourcePortConstraint?: import("../../types.js").StylePortConstraint;
        spacing?: number;
        spacingBottom?: number;
        spacingLeft?: number;
        spacingRight?: number;
        spacingTop?: number;
        startArrow?: import("../../types.js").StyleArrowValue;
        startFill?: boolean;
        startFillColor?: import("../../types.js").ColorValue;
        startStrokeColor?: import("../../types.js").ColorValue;
        startSize?: number;
        strokeColor?: import("../../types.js").SpecialStyleColorValue;
        strokeOpacity?: number;
        strokeWidth?: number;
        swimlaneFillColor?: import("../../types.js").ColorValue;
        swimlaneLine?: boolean;
        targetJettySize?: number | "auto";
        targetPerimeterSpacing?: number;
        targetPort?: string;
        targetPortConstraint?: import("../../types.js").StylePortConstraint;
        textDirection?: import("../../types.js").TextDirectionValue;
        textOpacity?: number;
        verticalAlign?: import("../../types.js").VAlignValue;
        verticalLabelPosition?: import("../../types.js").VAlignValue;
        whiteSpace?: import("../../types.js").WhiteSpaceValue;
    };
}
