module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: '_layouts'
    },
  };
}
