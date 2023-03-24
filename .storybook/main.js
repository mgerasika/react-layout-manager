const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	stories: ["../src/components/**/*.stories.(ts|tsx)"],
	addons: [
		"@storybook/addon-knobs",
		"@storybook/addon-a11y/register",
		"@storybook/addon-links/register",
		"@storybook/addon-actions/register",
	],
	webpackFinal: async (config) => {
		// Temporary don't use custom scss loader
		// config.module.rules.push({
		//   test: /\.scss$/,
		//   use: ['style-loader', 'css-loader', 'sass-loader'],
		//   include: path.resolve(__dirname, '../src'),
		// });

		// Temporary don't use custom svg loader
		// const fileLoaderRule = config.module.rules.find(
		//     (rule) => rule.test && rule.test.test(".svg")
		// );
		// fileLoaderRule.exclude = /\.svg$/;

		// config.module.rules.push({
		//     test: /\.svg$/,
		//     enforce: "pre",
		//     loader: require.resolve("@svgr/webpack")
		// });

		config.plugins.push(
			new MiniCssExtractPlugin({ filename: "[name].css" })
		);

		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("ts-loader"),
					options: {
						transpileOnly: true,
					},
				},
				{
					loader: require.resolve("react-docgen-typescript-loader"),
				},
			],
		});

		// Uncomment when any fonts available
		// config.plugins.push(
		//   new CopyWebpackPlugin({
		//     patterns: [{
		//       from: path.resolve(__dirname, '../src/assets/fonts'),
		//       to: 'static/fonts'
		//     }]
		//   }),
		// );

		config.resolve.extensions.push(".ts", ".tsx");

		return config;
	},
};
