const fs = require("fs").promises;
const cssColors = require("./_data/cssColors.json");
const cssDarkColors = require("./_data/cssDarkThemeColors.json");

function createCSSVariables(colorsObject, darkTheme) {
	return `
		:root {
		${Object.entries(colorsObject)
			.map(v => `--${v[0]}: ${v[1]} `)
			.join(";\n ")}
		}

		.super-container_dark-mode{ 
			${Object.entries(darkTheme)
				.map(v => `--${v[0]}: ${v[1]} `)
				.join(";\n ")}
		}

	`;
}

async function createCssColorsFile(colors, cssDarkColors) {
	try {
		await fs.writeFile(
			"./css/variables.css",
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
