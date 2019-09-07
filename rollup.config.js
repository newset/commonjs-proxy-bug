const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: ['src/index.js', 'src/page.js'],
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  preserveModules: true,
  // preserveSymlinks: true,
  plugins: [
    commonjs({
      include: /_modules/,
      namedExports: {
        dva: ['subscription'],
        redux: ['Subscription'],
      },
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'src/js_modules',
      },
    }),
  ],
};
