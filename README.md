# Brad’s ESLint Config

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-bdougherty
```

Then add the `extends` option to your `.eslintrc`:

```json
{
	"extends": "bdougherty"
}
```

If the project is using ES6, extend from the ES6 version instead:

```json
{
	"extends": "bdougherty/es6"
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
