var website = require("./setup");
var postcss = require("metalsmith-postcss");
var htmlMinifier = require("metalsmith-html-minifier");

website
  .use(
    postcss({
      plugins: {
        'postcss-cssnext': {
          warnForDuplicates: false
        },
        cssnano: {},
      }
    })
  )
  .use(htmlMinifier())
  .build(function(err) {
    // build process
    if (err) throw err; // error handling is required
  });
