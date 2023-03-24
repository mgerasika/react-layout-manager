import { addons } from "@storybook/addons";

addons.setConfig({
	theme: {
		base: "dark",

		colorPrimary: "#FF443A",
		colorSecondary: "#FF443A",

		// UI
		appBg: "#1a1a1f",
		appContentBg: "#26242b",
		appBorderColor: "#312f38",
		appBorderRadius: 16,

		// Typography
		fontBase: '"Roboto", sans-serif',
		fontCode: "monospace",

		// Text colors
		textColor: "white",
		textInverseColor: "rgba(255,255,255,0.9)",

		// Toolbar default and active colors
		barTextColor: "#E5E4EC",
		barSelectedColor: "white",
		barBg: "#1a1a1f",

		// Form colors
		inputBg: "#1a1a1f",
		inputBorder: "#312f38",
		inputTextColor: "white",
		inputBorderRadius: 100,

		brandTitle: "EV3NTS General UI",
		// brandUrl: 'https://example.com',
		// brandImage: 'https://placehold.it/350x150',
	},
});
