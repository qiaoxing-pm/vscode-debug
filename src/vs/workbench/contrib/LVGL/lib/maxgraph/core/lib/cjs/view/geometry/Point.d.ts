/**
 * Implements a 2-dimensional vector with double precision coordinates.
 *
 * @category Geometry
 */
declare class Point {
    /**
     * Constructs a new point for the optional x and y coordinates.
     *
     * @param x - The x-coordinate (default is 0).
     * @param y - The y-coordinate (default is 0).
     */
    constructor(x?: number, y?: number);
    /**
     * Holds the x-coordinate of the point. Default is 0.
     */
    _x: number;
    /**
     * Holds the y-coordinate of the point. Default is 0.
     */
    _y: number;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    /**
     * Returns true if the given object equals this point.
     */
    equals(p: Point | null): boolean;
    /**
     * Returns a clone of this {@link Point}.
     */
    clone(): Point;
}
export default Point;
