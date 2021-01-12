module.exports = function (eleventyConfig) {
    eleventyConfig.dataTemplateEngine = ["njk", "11ty.js"];
    eleventyConfig.addFilter(
        "relative",
        (page, root = "/") =>
            `${require("path").relative(page.filePathStem, root)}/`
    );

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");

    return {
        passthroughFileCopy: true,
    };
};
