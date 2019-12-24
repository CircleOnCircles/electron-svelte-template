import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'renderer/mainWindow.js',
    output: {
        file: 'compiled/Compiled_MainWindow.js',
        format: 'iife',
        name: 'app',
        sourcemap: false
    },
    plugins: [
        resolve({
            browser: true,
            dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),
        commonjs(),
        svelte({
            dev: !production,
            css: css => {
                css.write('compiled/Compiled_MainWindow.css');
            }
        }),
        production && terser()
    ],
    watch: {
        clearScreen: false
    },
}
