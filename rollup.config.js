import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'build/esm5/index.js',
  output: [
    {
      name: 'CommandToJson',
      format: 'umd',
      file: 'build/bundles/command-to-json.umd.js',
      sourcemap: true,
    },
    {
      name: 'CommandToJson',
      format: 'umd',
      file: 'build/bundles/command-to-json.umd.min.js',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [commonjs(), nodeResolve()],
};
