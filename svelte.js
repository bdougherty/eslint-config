'use strict';
const path = require('path');

module.exports = {
	plugins: [
		'html',
		'@tivac/svelte'
	],
	extends: [
		'plugin:@tivac/svelte/svelte',
		path.join(__dirname, 'browser.js')
	]
};
