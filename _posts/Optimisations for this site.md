—
title: Optimisations for this site
—

This site is quite simple but I invested some time to make it as fast as possible. I learned some things during development I want to share.

### Use fallback fonts

After I optimised many parts of the site the page loaded very fast but the fonts did not. I noticed this when I had a throttled internet connection. “Source Sans Pro Regular” weights 150 KB. In total, I load 566 KB font files (Bold, Italic, Regular, Semibold).

My goal was to first load Helvetica to prevent a white screen (because everything loaded except the fonts). When the fonts loaded I want to apply them.

To achieve this, just embed a copy of [Font Face Observer](https://github.com/bramstein/fontfaceobserver) and use the following script. 

	var observer = new FontFaceObserver(‘Source Sans Pro’, {});
	var body = document.getElementsByTagName(“body”)[0];
	
	observer.check().then(function () {
  	  body.className = “fonts-loaded”;
	});

When the fonts loaded, the class “fonts-loaded” will be added the ``<body>`` element. In your CSS use it like this:

	body {
		font-family: “Helvetica”, sans-serif;
	}

	.fonts-loaded {
		font-family: “Source Sans Pro”;
	}

### Running gulp tasks in a row is impossible

Gulp tasks always run asynchronous. There is no way to change this because this is how Javascript works. There is a gulp plugin called [run-sequence](https://www.npmjs.com/package/run-sequence) trying to solve this problem. To detect wether a task has finished you have to ``return`` something which is not always possible (e.g. with the [critical task](https://github.com/addyosmani/critical)).

In your shell you could use something like this:

	gulp jekyll && gulp critical && gulp html

It waits for the jekyll task to finish, then runs the critical task and after this task is done, it runs the html task. I installed [gulp-shell](https://www.npmjs.com/package/gulp-shell) and then created a simple gulp task:

	var shell = require(‘gulp-shell’);

	gulp.task(‘build’, shell.task([
    ‘gulp jekyll && gulp critical && gulp html’
	]));

### Cache and compress everything (it is easy)

Caching and compression is easy. If your site runs on an Apache you can enable caching and compression using the ``.htaccess`` file. You can find mine [here](https://github.com/jonicious/jonas.re/blob/master/.htaccess).