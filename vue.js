'use strict';
const path = require('path');

module.exports = {
	parserOptions: {
		ecmaVersion: 2018
	},
	plugins: [
		'html',
		'vue'
	],
	extends: [
		'plugin:vue/recommended',
		path.join(__dirname, 'browser.js')
	],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': ['error', {
			html: {
				component: 'never'
			}
		}],
		'vue/max-attributes-per-line': 'off'
	}
};
