/* Config file*/
module.exports = function(eleventyConfig) {
    // Rebuild quand mvt dans css
    eleventyConfig.addWatchTarget("./src/css");

    // Dosser est cloné lors du build
    eleventyConfig.addPassthroughCopy(".src/img");
    eleventyConfig.addPassthroughCopy(".src/css");
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};