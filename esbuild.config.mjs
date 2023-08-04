import esbuild from 'esbuild'
import process from 'process'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import fs from 'fs'

const argv = yargs(hideBin(process.argv)).argv
const prod = argv._.indexOf('production') >= 0

/** @type {esbuild.BuildOptions} */
const distOptions = {
    banner: {
        js: '// Project: https://github.com/marc0l92/swagger-ui-flat-model-plugin',
    },
    entryPoints: [{
        in: './src/swagger-ui-flat-model-plugin.tsx',
        out: 'swagger-ui-flat-model-plugin',
    }],
    bundle: true,
    mainFields: ["browser", "module", "main"],
    format: 'esm',
    logLevel: 'info',
    sourcemap: false,
    treeShaking: true,
    outdir: './dist',
    minify: true,
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

/** @type {esbuild.BuildOptions} */
const testOptions = Object.assign({}, distOptions, {
    sourcemap: 'inline',
    outdir: './test/js',
    minify: false,
})

fs.copyFileSync('./dist/swagger-ui-flat-model-plugin.css', './test/css/swagger-ui-flat-model-plugin.css')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui.css', './test/css/swagger-ui.css')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui.css.map', './test/css/swagger-ui.css.map')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui-bundle.js', './test/js/swagger-ui-bundle.js')
fs.copyFileSync('./node_modules/swagger-ui-dist/swagger-ui-bundle.js', './test/js/swagger-ui-bundle.js.map')

if (prod) {
    esbuild.build(distOptions).catch(() => process.exit(1))
} else {
    const webCtxTest = await esbuild.context(testOptions)
    webCtxTest.watch().catch(() => process.exit(1))
    webCtxTest.serve({ servedir: 'test', port: 9000 }).catch(() => process.exit(1))
}
