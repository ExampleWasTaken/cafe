import { join } from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'tailwindcss';
import terser from '@rollup/plugin-terser';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

const src = join(__dirname, 'src');
const isDev = process.env.NODE_ENV === 'development';
const sourcemap = isDev ? 'inline' : false;

export default {
  input: join(src, 'index.tsx'),
  plugins: [
    copy({
      targets: [
        { src: 'src/index.html', dest: 'public/' },
      ],
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development',
    }),
    typescript({ outputToFilesystem: true }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        tailwind('./tailwind.config.js'),
      ],
    }),
    isDev && serve({
      contentBase: 'public/',
      port: 3000,
    }),
    isDev && livereload('public/'),
    !isDev && terser(),
  ],
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'cafe',
    sourcemap: sourcemap,
  },
};
