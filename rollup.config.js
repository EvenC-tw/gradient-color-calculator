import { createBasicConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-tsc/index.js',
  output: {
    dir: 'dist',
  },
});
