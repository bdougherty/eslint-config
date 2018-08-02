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

[`bdougherty/vue`](vue.js) for Vue.js-based projects:

```json
{
  "xo": {
	"extends": "bdougherty/vue",
    "extensions": [
      "vue"
    ]
  }
}
```

[`bdougherty/nuxt`](nuxt.js) for Nuxt.js-based projects:

```json
{
  "xo": {
	"extends": "bdougherty/nuxt",
    "extensions": [
      "vue"
    ]
  }
}
```

[`bdougherty/svelte`](svelte.js) for Svelte-based projects:

```json
{
  "xo": {
    "extends": "bdougherty/svelte",
    "extensions": [
      "html"
    ]
  }
}
```

[`bdougherty/sapper`](sapper.js) for Sapper-based projects:

```json
{
  "xo": {
    "extends": "bdougherty/sapper",
    "extensions": [
      "html"
    ]
  }
}
```

> Note: make sure to add the extensions config for both Vue.js and Nuxt.js projects if using single-file components.

## License

MIT © [Brad Dougherty](https://brad.is)
