import esbuild from 'esbuild'
import process from 'process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv
const prod = argv._.indexOf('production') >= 0

/** @type {esbuild.BuildOptions} */
const webOptions = {
    banner: {
        js: '// Project: https://github.com/marc0l92/swagger-ui-flat-model-plugin',
    },
    entryPoints: [
        './src/swaggerUiFlatModelPlugin.ts',
    ],
    bundle: true,
    mainFields: ["browser", "module", "main"],
    format: 'esm',
    logLevel: 'info',
    sourcemap: prod ? false : 'inline',
    treeShaking: true,
    outdir: './dist',
    minify: prod,
    platform: 'browser',
    splitting: true,
    target: [
        'chrome58',
        'edge18',
        'firefox57',
        'safari11',
    ],
}

if (prod) {
    esbuild.build(webOptions).catch(() => process.exit(1))
} else {
    const webCtx = await esbuild.context(webOptions)
    webCtx.watch().catch(() => process.exit(1))
}
