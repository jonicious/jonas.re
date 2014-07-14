=== Escape HTML For Prism Syntax Highlighter ===
Contributors: satya61229
Author URI: http://www.satya-weblog.com/
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JCVH4RPHL4P5G
Tags: code, script, escape, encode, entity, entities, html, developer, programmer, post, prism, markup
Requires at least: 2.0.2
Tested up to: 3.6
Stable tag: 0.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Helpful plugin for those who post HTML/Markup using Prism. It support &lt;pre&gt;&lt;code class="language-xxxx"&gt; syntax.

== Description ==

This plugin is a extension of my earlier plugin [Escape HTML](http://wordpress.org/plugins/escape-html/).
Many of us post code and scripts online on Wordpress and for that we need to escape those codes to html entities. For posting inside Wordpress, we need to escape few characters so that it appears as it is to visitors. There are few online [escaping tool](http://www.satya-weblog.com/tools/htmlencode.php) as well. This plugin save your effort to escape code manually. 

The plugin - Escape HTML For Prism Syntax Highlighter - take cares of `<`, `>` and `&`. Without converting HTML code to HTML entities, Prism will strip off those HTML.

This plugin work when we Save or Draft a Post and it only affect those text written inside &lt;pre&gt;&lt;code&gt; Affected Code &lt;/code&gt;&lt;/pre&gt;.
Most feed readers do not support JavaScript. So, many blog owners are using client-side syntax highlighter based on JavaScript. Prism is one just lightweight and fast Syntax Highlighter based on JavaScript.

This plugin does not require any setting. Just install and enable it.  
For more information about this plugin - [Escape HTML For Prism Syntax Highlighter](http://www.satya-weblog.com/). 


== Installation ==

1. Download the plugin from Wordpress Plugin Directory.
2. Upload `escape-html-for-prism.php` to the `/wp-content/plugins/` directory
3. Active the plugin
4. Now, for new posts, code can be posted without escaping HTML.

== Frequently Asked Questions ==

= Who should use this plugin ? = 
This plugin is written for escaping characters `(<, > and &)` to html entities. This is required for Syntax Highlighting of HTML code using Prism. 
This plugin will work on code written inside &lt;pre&gt;&lt;code&gt; Affected Code &lt;/code&gt;&lt;/pre&gt;. If you want a plugin to work on <pre>, <code> and <tt> separately then use [Escape HTML](http://wordpress.org/plugins/escape-html/).

== Screenshots ==

Screenshot 1 is pasted or typed code in Text mode of editor. Screenshot-2 is the output when you either press `Draft` or `Publish`. 

If you click directly on Visual Mode of editor after pasting/typing markup then your `markup` will go as Editor will take your markup differently. This happens by default even without this plugin. If you are the one who like to work on Visual Mode then this plugin provides you option for that. Just click on Draft Mode and after that the plugin will transform the code into encoded one. The code will be visible on Visual Mode as well after that. 

If you work on Text Mode only (generally those who work on code do this) then you just work on your post, and finally say `Publish`. No need to worry about the markup. At the time of saving, the plugin will work. It encode the code before `Save`.

= 0.5 =

* Development release
