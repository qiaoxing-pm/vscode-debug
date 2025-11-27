import {
	Point
} from "../../packages/core/src/index.js"
/**
 * 生成一个正多边形的顶点坐标，归一化到[0,1]范围
 * @param sides 多边形的边数 (>=3)
 * @returns 顶点坐标数组，左上角为(0,0)，右下角为(1,1)
 */
function genRegularPolygonPoints(sides: number): Point[] {
	if (sides < 3) {
		throw new Error("Polygon must have at least 3 sides");
	}

	const points: Point[] = [];
	const angleStep = (2 * Math.PI) / sides;

	// 生成单位圆坐标
	for (let i = 0; i < sides; i++) {
		const angle = -Math.PI / 2 + i * angleStep; // 顶点朝上
		const x = Math.cos(angle);
		const y = Math.sin(angle);
		points.push(new Point(x, y));
	}

	// 找出边界
	const minX = Math.min(...points.map(p => p.x));
	const maxX = Math.max(...points.map(p => p.x));
	const minY = Math.min(...points.map(p => p.y));
	const maxY = Math.max(...points.map(p => p.y));

	const width = maxX - minX;
	const height = maxY - minY;

	// 归一化到[0,1]
	const normalized = points.map(p => new Point(
		+((p.x - minX) / width).toFixed(2),
		+((p.y - minY) / height).toFixed(2)
	));

	return normalized;
}

export { genRegularPolygonPoints };
