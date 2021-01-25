module.exports = function (eleventyConfig) {
	//sets the types of the templates to transform
	eleventyConfig.dataTemplateEngine = ["njk", "md", "11ty.js"];
	eleventyConfig.addFilter(
		"relative",
		(page, root = "/") => `${require("path").relative(page.filePathStem, root)}/`
	);

	//adds the following folders to _site
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("uploads");
	eleventyConfig.addPassthroughCopy("admin");
	return {
		passthroughFileCopy: true
	};
};
