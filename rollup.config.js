import esbuild from 'rollup-plugin-esbuild';

export default {
  input: 'out-tsc/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    esbuild({
      include: /\.[jt]s?$/,
      exclude: /node_modules/,
      sourceMap: true,
      minify: true,
      target: 'ES2015',
      tsconfig: 'tsconfig.json',
    }),
  ],
};
