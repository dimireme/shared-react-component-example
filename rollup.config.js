import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import typeScript from 'rollup-plugin-typescript2';
import html from 'rollup-plugin-html';
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.min.js', format: 'commonjs' }],
    plugins: [
      nodeResolve(), // подключение модулей node
      commonJs(), // подключение модулей commonjs
      html(), // подключение html файлов
      typeScript({ tsconfig: 'tsconfig.json' }), // подключение typescript
      sizeSnapshot(), // напишет в консоль размер бандла
      terser(), // минификатор совместимый с ES2015+, форк и наследник UglifyES
      visualizer(), // анализатор бандла
    ],
  },
];
