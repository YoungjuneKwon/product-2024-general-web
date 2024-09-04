import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default [
    {
        input: 'src/main.js',
        output: [
            {
                format: "esm",
                file: "dist/index.esm.js",
                plugins: [terser()],
                sourcemap: true,
            },
            {
                format: "cjs",
                file: "dist/index.cjs.js",
                plugins: [terser()],
                sourcemap: true,
            }
        ],
        plugins: [
            resolve({
                browser: true,
                preferBuiltins: true,
            }),
            vue({
                css: true,
                compileTemplate: true,
            }),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
                presets: ['@babel/preset-env']
            }),
            json(),
            terser()
        ],
        external: ['vue']
    }
];