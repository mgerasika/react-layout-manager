import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

// To handle css files
import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';


// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");
const config = {
	name: 'DesignSystem',
	extensions: ['.ts', '.tsx'],
};
export default [
	{
		input: "src/lib/index.tsx",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},

		],
		plugins: [
			peerDepsExternal(),
			resolve({
				extensions: config.extensions,
			}),
			commonjs(),

			babel({
				extensions: config.extensions,
				include: ['src/**/*'],
				exclude: 'node_modules/**',
				presets: [
					"@babel/preset-react",
					"@babel/preset-typescript",
				],
			}),

			postcss(),
			terser(),
			image()
		],
	},

];