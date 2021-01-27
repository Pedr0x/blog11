const fs = require("fs").promises;
const cssColors = require("./_data/cssColors.json");
const cssDarkColors = require("./_data/cssDarkThemeColors.json");

function transformJsonToCssVariables(colors) {
	return Object.entries(colors)
		.map(v => `--${v[0]}: ${v[1]} `)
		.join(";\n ");
}

function createCSSVariables(colorsObject, darkTheme) {
	return `
		:root {
			${transformJsonToCssVariables(colorsObject)}
		}

		.super-container_dark-mode{ 
			${transformJsonToCssVariables(darkTheme)}
		}

	`;
}

async function createCssColorsFile(colors, cssDarkColors) {
	try {
		await fs.writeFile(
			"./assets/css/variables.css",
			createCSSVariables(colors, cssDarkColors),
			err => {
				if (err) throw err;
			}
		);
	} catch (error) {
		console.error(`Got an error trying to read the file: ${error.message}`);
	}
}

createCssColorsFile(cssColors, cssDarkColors);

module.exports = createCssColorsFile;
