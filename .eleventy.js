module.exports = function (eleventyConfig) {
    eleventyConfig.dataTemplateEngine = ["njk", "md", "11ty.js"];
    eleventyConfig.addFilter(
        "relative",
        (page, root = "/") =>
            `${require("path").relative(page.filePathStem, root)}/`
    );

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");
    //oxoft2021
    return {
        passthroughFileCopy: true,
    };
};
