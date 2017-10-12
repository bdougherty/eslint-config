# eslint-config-bdougherty

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for my personal projects.

## Install

```bash
yarn add eslint-config-bdougherty
```

## Usage

This config contains a couple rule overrides and is primarily designed to be used with [XO](https://github.com/sindresorhus/xo). Add the following to package.json:

```json
{
	"xo": {
		"extends": "bdougherty"
	}
}
```

This package also exposes two configs that can be used directly with ESLint.

[`bdougherty/browser`](browser.js) for browser-based projects:

```json
{
	"extends": "bdougherty/browser"
}
```

and [`bdougherty/node`](node.js) for node-based projects:

```json
{
	"extends": "bdougherty/node"
}
```

## License

MIT © [Brad Dougherty](https://brad.is)
