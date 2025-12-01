// widgetListGroup

import type { widgetListGroup } from './class.js';

export const imgData: Array<widgetListGroup> = [
	{
		label: 'basics',
		type: 'folder',
		imgElement: {
			imgData: [
				{
					label: 'obj', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/container.png", defaultSize: {
						w: 100,
						h: 100
					},
					sort: 100,
				},
				{
					label: 'arc', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/arc.png",
					defaultSize: {
						w: 150,
						h: 150
					},
					sort: 1
				},
				{
					label: 'button', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/button.png",
					defaultSize: {
						w: 100,
						h: 40
					},
					sort: 2
				},
				{
					label: 'image', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/image.png",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 3

				},
				{
					label: 'player', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/image.png",
					defaultSize: {
						w: 180,
						h: 125
					},
					sort: 3
				},
				{
					label: 'label', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/label.png",
					defaultSize: {
						w: 80,
						h: 20
					},
					sort: 4
				},
				{
					label: 'list', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabpage.png",
					defaultSize: {
						w: 200,
						h: 150
					},
					sort: 7
				},
				{
					label: 'multistateimage', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabpage.png",
					defaultSize: {
						w: 200,
						h: 150
					},
					sort: 7
				},
				{
					label: 'tabview', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabview.png",
					defaultSize: {
						w: 400,
						h: 300
					},
					sort: 8
				},
				{
					label: 'textarea', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/textarea.png",
					defaultSize: {
						w: 260,
						h: 120
					},
					sort: 9
				},
				{
					label: 'multistatetext', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/textarea.png",
					defaultSize: {
						w: 260,
						h: 120
					},
					sort: 9
				},
			]
		}
	},
	{
		label: 'controller',
		type: 'folder',
		imgElement: {
			imgData: [
				{
					label: 'calendar', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/calendar.png",
					defaultSize: {
						w: 300,
						h: 300
					},
					sort: 1
				},
				{
					label: 'checkbox', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/checkbox.png",
					defaultSize: {
						w: 100,
						h: 24
					},
					sort: 2
				},
				{
					label: 'dropdown', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/dropdown.png",
					defaultSize: {
						w: 120,
						h: 40
					},
					sort: 4
				},
				{
					label: 'imgbutton', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/imgbutton.png",
					defaultSize: {
						w: 260,
						h: 120
					},
					sort: 5
				},
				{
					label: 'roller', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/roller.png",
					defaultSize: {
						w: 150,
						h: 200
					},
					sort: 7
				},
				{
					label: 'slider', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/slider.png",
					defaultSize: {
						w: 200,
						h: 10
					},
					sort: 8
				},
				{
					label: 'spinbox', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/spinbox.png",
					defaultSize: {
						w: 120,
						h: 35
					},
					sort: 9
				},
				{
					label: 'multistatenum', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/spinbox.png",
					defaultSize: {
						w: 120,
						h: 35
					},
					sort: 9
				},
				{
					label: 'switch', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/switch.png",
					defaultSize: {
						w: 60,
						h: 30
					},
					sort: 10
				},
			]
		}
	},
	{
		label: 'lvgl',
		type: 'folder',
		imgElement: {
			imgData: [
				{
					label: 'scale', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/lvgl/gauge.png",
					defaultSize: {
						w: 160,
						h: 160
					},
					sort: 6
				},
				{
					label: 'led', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/lvgl/led.png",
					defaultSize: {
						w: 80,
						h: 80
					},
					sort: 7
				},
			]
		}
	},
	{
		label: 'visualiser',
		type: 'folder',
		imgElement: {
			imgData: [
				{
					label: 'bar', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/visualiser/bar.png",
					defaultSize: {
						w: 200,
						h: 30
					},
					sort: 1
				},
			]
		}
	},
	{
		label: 'graphics',
		type: 'folder',
		imgElement: {
			imgData: [
				{
					label: 'triangle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/triangle.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'rectangle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/rectangle.svg",
					defaultSize: {
						w: 100,
						h: 50
					},
					sort: 1
				},
				{
					label: 'diamond', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/diamond.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'parallelogram', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/parallelogram.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'polygon', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/polygon.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'circle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/circle.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'ellipse', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/ellipse.svg",
					defaultSize: {
						w: 150,
						h: 100
					},
					sort: 1
				},
				{
					label: 'partellipse', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/part_ellipse.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
				{
					label: 'partcircle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/part_circle.svg",
					defaultSize: {
						w: 100,
						h: 100
					},
					sort: 1
				},
			]
		}
	}
];
