
import type { Point } from '../../../packages/core/src/index.js';
import { LvglEmscriptModule } from './lvglModule.ts'
import type { EmscriptenModule } from "../../../type.js"

declare module './lvglModule.ts' {
	interface LvglEmscriptModule extends EmscriptenModule {
		ctx: CanvasRenderingContext2D | null;
		offScreenCanvas: OffscreenCanvas;
	}
}

declare module "../../packages/core/src/types.ts" {
	interface CellStateStyle {
		// Add your custom properties here
		type?: string;
		screen?: LvObjT;
		lvglObjT?: LvObjT;
		name?: string;
		node?: Element;

		polyCoords?: Point[]; // 多边形的顶点坐标

		group?: boolean;
		isHmi?: boolean;
	}
}
