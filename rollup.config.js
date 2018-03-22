const rollupPluginCommonJS = require('rollup-plugin-commonjs');
const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');

export default {
    input: 'node_modules/util/util.js',
    output: {
        file: 'util.js',
        format:'es'
    },
    plugins: [
        rollupPluginNodeResolve({
            preferBuiltins: false,
            browser: true
        }),
        rollupPluginCommonJS()
    ]
}
