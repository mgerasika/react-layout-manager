import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { addParameters } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

import "../.storybook/storybook.scss";
import "../src/styles.scss";

addDecorator(withKnobs);
addDecorator(StoryRouter());
addDecorator(withA11y);
addDecorator(
	withInfo({
		inline: true,
		styles: {
			infoBody: {
				fontFamily: "'Roboto', sans-serif",
				color: "white",
				fontWeight: 400,
				lineHeight: 1.4,
				fontSize: "14px",
				padding: "20px 40px 40px",
				borderRadius: "2px",
				backgroundColor: "#1f1f24",
			},
		},
	})
);

addParameters({
	options: {
		showRoots: true,
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
});
