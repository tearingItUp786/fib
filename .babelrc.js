const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				modules: isTest ? "commonjs" : false,
				targets: "> 0.25%, not dead",
			},
		],
		"@babel/preset-react",
	],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					utils: "./src/utils",
					components: "./src/components",
					configs: "./src/configs",
				},
			},
		],
		["babel-plugin-styled-components"],
	],
};
