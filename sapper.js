'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'svelte.js'),
	overrides: [
		{
			files: [
				'components/**.html'
			],
			rules: {
				'unicorn/filename-case': ['error', {
					case: 'pascalCase'
				}]
			}
		}
	],
	settings: {
		'import/ignore': [
			'./manifest'
		]
	}
};
