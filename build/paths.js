var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
	root: appRoot,
	html: [
		appRoot + "**/*.html",
    "!" + appRoot + "**/_*.html"
	],
	sass: [
    appRoot + "**/*.scss",
    appRoot + "**/*.css",
  ],
  img: appRoot + "assets/images/**/*.{ico,png,jpg}",
  js: appRoot + "assets/js/**/*.bundle.js",
  sound: appRoot + "assets/sounds/**/*.wav",
  output: outputRoot
}

