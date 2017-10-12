'use strict';
const path = require('path');

module.exports = {
	extends: [
		'xo/esnext',
		path.join(__dirname, 'index.js')
	],
	env: {
		node: true,
		browser: false
	}
};
