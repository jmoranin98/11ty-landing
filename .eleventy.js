const fs = require('fs');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('assets');

  return {
    htmlTemplateEngine: 'njk',
  };
};