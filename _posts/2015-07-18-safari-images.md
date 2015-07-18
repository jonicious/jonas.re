---
title: How to change the way Safari is displaying single images
author: jonas
layout: post
date: 18.07.2015
permalink: /safari-images/
---

For personal use, I use Safari as my browser on the Mac. I quite like it but never liked how it displays single images on a direct link. Safari offers the option to add a custom style sheet, so you can easily change the styles.

**This is how Safari displays images by default:**

<img src="/images/safari-standard-style-image.png" alt="Single images in Safari the default way">

**This is how images look in Safari after adding custom styles:**

<img src="/images/safari-custom-style-image.png" alt="Single images in Safari with custom styles">

If you open the dev tools and look at the code, it looks like the following on large images.

<pre><code class="language-markup">&lt;body style=&quot;margin: 0px&quot;&gt;
  &lt;img style=&quot;-webkit-user-select: none; display: block; margin: auto; cursor: zoom-in;&quot; src=&quot;https://placeholdit.imgix.net/~text?txtsize=75&amp;amp;txt=1100%C3%971100&amp;amp;w=1100&amp;amp;h=1100&quot; width=&quot;866&quot; height=&quot;866&quot;&gt;
&lt;/body&gt;
</code></pre>
	
On small images, the code looks like this:

<pre><code class="language-markup">&lt;body style=&quot;margin: 0px&quot;&gt;
  &lt;img style=&quot;-webkit-user-select:none; display:block; margin:auto;&quot; src=&quot;https://placeholdit.imgix.net/~text?txtsize=75&amp;amp;txt=400%C3%97400&amp;amp;w=400&amp;amp;h=400&quot;&gt;
&lt;/body&gt;
</code></pre>
	
On large images, there is ``cursor: zoom-in`` and a space after the CSS property.

### Firefox Developer Edition

**I like the way, "Firefox Developer Edition" displays single images:**

<img src="/images/firefox-image.png" alt="Single image in Firefox">

The HTML looks like this:

<pre><code class="language-markup">&lt;head&gt;
  &lt;meta content=&quot;width=device-width; height=device-height;&quot; name=&quot;viewport&quot;&gt;
  &lt;link href=&quot;resource://gre/res/ImageDocument.css&quot; rel=&quot;stylesheet&quot;&gt;
  &lt;link href=&quot;resource://gre/res/TopLevelImageDocument.css&quot; rel=&quot;stylesheet&quot;&gt;
  &lt;link href=&quot;chrome://global/skin/media/TopLevelImageDocument.css&quot; rel=&quot;stylesheet&quot;&gt;
  &lt;title&gt;~text (PNG Image, 400&amp;nbsp;&#215;&amp;nbsp;400 pixels)&lt;/title&gt;
&lt;/head&gt;
	
&lt;body&gt;
  &lt;img class=&quot;transparent&quot; alt=&quot;https://placeholdit.imgix.net/~text?txtsize=38&amp;amp;txt=400%C3%97400&amp;amp;w=400&amp;amp;h=400&quot; src=&quot;https://placeholdit.imgix.net/~text?txtsize=38&amp;amp;txt=400%C3%97400&amp;amp;w=400&amp;amp;h=400&quot;&gt;
&lt;/body&gt;
</code></pre>
	
Note that they link another stylesheet to display the specific styles. The applied CSS looks like this:

<pre><code class="language-css">img {
  text-align: center;
  position: absolute;
  margin: auto;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}</code></pre>
	
### Styling

As you could have seen above, Safari uses inline styles to style single images. I created a file called ``safari.css`` with the following content:

<pre><code class="language-css">/* Image styles */

	body[style="margin: 0px"] img[style="-webkit-user-select:none; display:block; margin:auto;"]:only-of-type,
	body[style="margin: 0px"] img[style="-webkit-user-select: none; display: block; margin: auto; cursor: zoom-in;"]:only-of-type {
	  text-align: center;
	  position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: auto !important;
      height: auto !important;
      max-width: 90%;
      max-height: 100%;
    }</code></pre>
    
What does this do? It selects only ``body`` elements that have an inline styling with ``margin: 0px`` and ``img`` elements with specific styles. Note the space after the CSS property. With the help of the ``:only-of-type`` selector we make sure that we style only images that are the only type like this on the page. If there were multiple images with these styles, our styles would not have been applied.

You have to set ``width`` and ``height`` to ``auto`` to set "reset" them and overwrite them with ``!important`` because inline styles have a higher priority then embedded CSS. 

### How to add a custom style sheet

<img src="/images/safari-settings.png" alt="Advanced tab in Safari">

Open Safari's preferences, then open the Advanced tab and there you can see the option to select a custom style sheet. Find your style sheet, restart Safari and you are done.