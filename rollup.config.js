export default {
  input: 'out-tsc/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'es',
    sourcemap: true,
  },
};
