/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


export interface Point {
	x: number;
	y: number;
}

export interface PointType {
	x: number;
	y: number;
}

export interface Rect {
	x: number;
	y: number;
	width: number;
	height: number;
	points: Array<PointType>;
}

export interface rpsVar {
	value: any;
}

export interface MaskRectangle {
	x: number;
	y: number;
	width: number;
	height: number;
	points: Array<PointType>;
}

export interface lineStyle {
	color?: string;
	width?: 2;
	lineType?: "dash" | "solid";
}
