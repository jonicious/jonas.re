---
title: BrowserSync + Gulp.js
author: jonas
layout: post
permalink: /browsersync-gulp-js/
categories:
  - Allgemein
---
Lately, I made the switch from <a href="https://incident57.com/codekit/" target="_blank">Codekit</a> to <a href="http://gulpjs.com" target="_blank">gulp.js</a>. Looking for cool plugins, I saw many people using <a href="https://github.com/vohof/gulp-livereload" target="_blank">Livereload</a> but this did not seem like a perfect solution for my needs. I wanted to inject CSS changes to the browser without reloading the page. This is especially great if you style an element that needs user interaction, e.g. a popup. When the CSS changes get injected directly, you do not have to reload the page and click some button to show the popup again. Additionally the browser should reload automatically when a php/js/html file changed.

I assume, you are familiar with gulp.js. If not, <a href="http://martinwolf.org" target="_blank">Martin Wolf</a> made a <a href="https://www.youtube.com/watch?v=7eoaqbEZ7G0" target="_blank">screencast</a> (which you should watch) about getting started with gulp.js. Otherwise, <a href="http://markgoodyear.com/2014/01/getting-started-with-gulp/" target="_blank">read this article</a>.

### BrowserSync

BrowserSync does exactly what I wanted and something that is really amazing. But first, let us cover the basics: You open a specific URL on your devices (BrowserSync tells you the URL after starting BrowserSync) and everytime you change a file, all devices reload their browser automatically or inject the CSS changes. That is great but not something special. Wouldn&#8217;t it be nice scrolling the site on your Macbook and interacting with the site and everything you do happens on your iPad or iPhone in real time? This means, you do not even have to touch your devices to test. This is what we want to achieve:



### How to install

First of all, you have to install BrowserSync.

<pre><code class=" language-javascript">$ npm install browser-sync
</code></pre>

In your `gulpfile.js`, you need to require it.

<pre><code class=" language-javascript">var gulp         = require('gulp'),
    browserSync  = require('browser-sync');
</code></pre>

Now, we need to start the BrowserSync server in our `gulpfile.js` and specify for which files BrowserSync should look wether they change or not. We are doing this by this little snippet:

<pre><code class=" language-javascript">// Browser sync for css, js and html files

gulp.task('browser-sync', function() {  
    browserSync.init(["./*.css", "./*.js", "./*.html"], {
        server: {
            baseDir: "./"
        }
    });
});
</code></pre>

As you may have guessed, Browser Sync looks for every css, js and html file in the root folder.

But ideally, you start a gulp task once and then let gulp handle the rest for you. Our goal here is to start the task `watch` with `gulp watch` and with this task, we also want to start some other tasks.

<pre><code class=" language-javascript">gulp.task('watch', ['sass', 'browser-sync', 'html-build', 'js'], function () {  
    gulp.watch("style.scss", ['sass']);
    gulp.watch("script.js", ['js']);
    gulp.watch("./with_includes/*.html", ['html-build']);
});
</code></pre>

In our example, by using `gulp watch`, we also start the tasks `sass`, `browser-sync`, `html-build` and `js`. To start a task once and then let gulp watch for changes, we just use `gulp.watch()`. For example, when `style.scss` changes, the task `sass` automatically starts and does its job.

<img data-responsive="199" src="http://jonas.re/wp-content/uploads/2014/07/Screen-Shot-2014-07-13-at-16.24.52.png" alt="Screen Shot 2014-07-13 at 16.24.52" width="706" height="578" class="alignnone size-full wp-image-199" />

To my mind, this is a great workflow, especially when your site is responsive (which should be the case) and you need to test it on several devices.

By the way, you can find my whole <a href="https://gist.github.com/jonicious/b16b594a37f5827f5fa0" taget"_blank">gulpfile.js here</a> and my <a href="https://gist.github.com/jonicious/cfa3a37edb3e5735fc02" target="_blank">package.json here</a>.