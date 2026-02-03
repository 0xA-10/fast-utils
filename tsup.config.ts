import {defineConfig} from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'array/index': 'src/array/index.ts',
    'object/index': 'src/object/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  target: 'es2022',
  splitting: false,
});
