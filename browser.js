'use strict';
const path = require('path');

module.exports = {
	extends: [
		'xo/browser',
		path.join(__dirname, 'index.js')
	]
};
