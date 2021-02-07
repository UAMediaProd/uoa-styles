const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  
  // Markdown
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  const MarkdownIt = require("markdown-it");
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
  return mdRender.render(rawString);
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: '_layouts'
    },
  };
}
