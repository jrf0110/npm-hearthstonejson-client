import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import json from "rollup-plugin-json";
import tsc from "typescript";
import pkg from "./package.json";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				format: "cjs",
				file: `${pkg.main}.js`,
				name: "hearthstonejson-client",
			},
			{
				format: "es",
				file: `${pkg.main}.mjs`,
			},
		],
		plugins: [
			typescript({
				typescript: tsc,
			}),
			resolve(),
			commonjs(),
			json(),
		],
		external: [
			"buffer",
			"http",
			"https",
			"stream",
			"string_decoder",
			"url",
			"util",
			"zlib",
		],
	},
	{
		input: "src/index.ts",
		output: [
			{
				format: "umd",
				file: `${pkg.browser}.js`,
				name: "hearthstonejson-client",
			},
			{
				format: "es",
				file: `${pkg.browser}.mjs`,
			},
		],
		plugins: [
			typescript({
				typescript: tsc,
			}),
			resolve({ browser: true }),
			commonjs(),
			json(),
		],
	},
];
