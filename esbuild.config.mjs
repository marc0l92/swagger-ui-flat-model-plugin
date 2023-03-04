import esbuild from 'esbuild'
import process from 'process'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import fs from 'fs'

const argv = yargs(hideBin(process.argv)).argv
const prod = argv._.indexOf('production') >= 0

/** @type {esbuild.BuildOptions} */
const webOptions = {
    banner: {
        js: '// Project: https://github.com/marc0l92/swagger-ui-flat-model-plugin',
    },
    entryPoints: [
        {
            in: './src/swaggerUiFlatModelPlugin.tsx',
            out: './dist/swaggerUiFlatModelPlugin'
        },
        {
            in: './src/swaggerUiFlatModelPlugin.tsx',
            out: './test/js/swaggerUiFlatModelPlugin'
        },
    ],
    bundle: true,
    mainFields: ["browser", "module", "main"],
    format: 'esm',
    logLevel: 'info',
    sourcemap: prod ? false : 'inline',
    treeShaking: true,
    outdir: '.',
    minify: prod,
    platform: 'browser',
    splitting: false,
    target: [
        'chrome58',
        'edge18',
        'firefox57',
        'safari11',
    ],
    plugins: [
        NodeModulesPolyfillPlugin(),
    ],
}

fs.copyFileSync('./dist/swaggerUiFlatModelPlugin.css', './test/css/swaggerUiFlatModelPlugin.css')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui.css', './test/css/swagger-ui.css')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui.css.map', './test/css/swagger-ui.css.map')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui-bundle.js', './test/js/swagger-ui-bundle.js')

if (prod) {
    esbuild.build(webOptions).catch(() => process.exit(1))
} else {
    const webCtx = await esbuild.context(webOptions)
    webCtx.watch().catch(() => process.exit(1))
}
