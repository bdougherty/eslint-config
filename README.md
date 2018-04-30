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

This package also exposes other configs that can be used for specific types of projects.

[`bdougherty/browser`](browser.js) for browser-based projects:

```json
{
  "xo": {
    "extends": "bdougherty/browser"
  }
}
```

## License

MIT © [Brad Dougherty](https://brad.is)
