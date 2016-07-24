var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
	root: appRoot,
	html: [
		appRoot + "**/*.html",
    "!" + appRoot + "**/*.partial.html"
	],
	sass: appRoot + "**/*.scss",
  img: appRoot + "**/*.{ico,png,jpg}",
  js: appRoot + "**/*.bundle.js",
  output: outputRoot
}

