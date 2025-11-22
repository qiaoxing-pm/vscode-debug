import Geometry from '../geometry/Geometry.js';
import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change a cell's geometry in a model.
 *
 * @category Change
 */
declare class GeometryChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    geometry: Geometry | null;
    previous: Geometry | null;
    constructor(model: GraphDataModel, cell: Cell, geometry: Geometry | null);
    /**
     * Changes the geometry of {@link cell} to {@link previous} using{@link GraphDataModel.geometryForCellChanged}.
     */
    execute(): void;
}
export default GeometryChange;
