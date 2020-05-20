'use strict';
const mat4 = require('gl-mat4');
const fit = require('canvas-fit');

const canvas = document.body.appendChild(document.createElement('canvas'));
window.addEventListener('resize', fit(canvas), false);

let regl, map, drawMap, placement, drawPainting, fps;
try {
	regl = require('regl')({
		canvas,
		extensions: [
			//'angle_instanced_arrays',
			'oes_texture_float',
			'OES_element_index_uint',
			'EXT_texture_filter_anisotropic'
		]
	});

	map = require('./map')();
	drawMap = require('./mesh')(regl, map);
	placement = require('./placement')(regl, map.segments);
	drawPainting = require('./painting')(regl);
	fps = require('./fps')(map.segments);
} catch (e) {
	document.body.innerText = "This project doesn't work on certain browser";
	throw e;
}

const proj = [];
const context = regl({
	cull: {
		enable: true,
		face: 'back'
	},
	uniforms: {
		view: fps.view,
		yScale: 1.0,
		proj: ({ viewportWidth, viewportHeight }) =>
			mat4.perspective(proj, Math.PI / 3, viewportWidth / viewportHeight, 0.1, 100)
	}
});

const reflexion = regl({
	cull: {
		enable: true,
		face: 'front'
	},
	uniforms: {
		yScale: -1.0
	}
});

regl.frame(({ time }) => {
	fps.tick({ time });
	placement.update(fps.pos);
	regl.clear({ color: [0, 0, 0, 1] });
	context(() => {
		reflexion(() => {
			drawMap();
			drawPainting(placement.batch());
		});
		drawMap();
		drawPainting(placement.batch());
	});
});