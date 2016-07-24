var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
	root: appRoot,
	html: [
		appRoot + "**/*.html",
    "!" + appRoot + "**/_*.html"
	],
	sass: [
    'node_modules/material-design-lite/src/material-design-lite.scss',
    appRoot + "**/*.scss",
  ],
  img: appRoot + "**/*.{ico,png,jpg}",
  js: appRoot + "**/*.bundle.js",
  output: outputRoot
}

