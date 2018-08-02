'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'vue.js'),
	overrides: [
		{
			files: [
				'components/**.vue'
			],
			rules: {
				'unicorn/filename-case': ['error', {
					case: 'pascalCase'
				}]
			}
		},
		{
			files: [
				'api/**/*.js',
				'index.js',
				'nuxt.*.js'
			],
			env: {
				node: true,
				browser: false
			}
		},
		{
			files: [
				'store/**/*.js'
			],
			env: {
				node: true,
				browser: true
			}
		}
	],
	settings: {
		'import/resolver': {
			nuxt: {
				extensions: [
					'.js',
					'.vue'
				]
			}
		},
		'import/core-modules': [
			'vuex'
		]
	}
};
