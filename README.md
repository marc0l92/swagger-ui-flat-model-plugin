# swagger-ui-flat-model-plugin

![Build status](https://img.shields.io/github/actions/workflow/status/marc0l92/swagger-ui-flat-model-plugin/ci.yaml) ![License](https://img.shields.io/github/license/marc0l92/swagger-ui-flat-model-plugin)

Plugin for [swagger-ui](https://github.com/swagger-api/swagger-ui) to add an additional way to display the request/responses models inspired by swagger-ui-2.

[Plugin Demo](https://marc0l92.github.io/swagger-ui-flat-model-plugin/)

## How to install it

- Download the files in the `dist` folder:

```
dist/swaggerUiFlatModelPlugin.css
dist/swaggerUiFlatModelPlugin.js
```

- Include them in your website:

```html
<link rel="stylesheet" href="./css/swaggerUiFlatModelPlugin.css" />
<script src="./js/swaggerUiFlatModelPlugin.js"></script>
```

- Initialize the swagger ui using this plugin

```js
SwaggerUIBundle({
    url: './data/openapi.json',
    dom_id: '#swagger-ui',
    plugins: [swaggerUiFlatModelPlugin],
});
```

See the [example in the test folder](https://github.com/marc0l92/swagger-ui-flat-model-plugin/blob/master/test/index.html) for more details.