import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // Importa el plugin commonjs

export default {
  input: './src/index.js',
  output: [
    {
      format: 'esm',
      file: './dist/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs() // Añade el plugin a tu cadena de plugins
  ]
};