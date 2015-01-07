---
title: Responsive Images erklärt
author: jonas
excerpt: Responsive Images sind ein Trend im Web Development und werden immer wichtiger, weil mobile Geräte an Wichtigkeit gewinnen. Es gibt drei Gründe für den Einsatz von Responsive Images. Es wird erklärt, wie Responsive Images zu nutzen sind.
layout: post
permalink: /responsive-images/
categories:
  - Allgemein
---
Responsive Images sind ein Trend im Web Development und werden immer wichtiger, weil mobile Geräte an Wichtigkeit gewinnen. Es gibt drei Gründe für den Einsatz von Responsive Images:

  * **Bandbreite sparen. **In vielen Bereichen ist die Internetverbindung für mobile Geräte noch nicht ausreichend gut. Das gleiche Bilder wie auf dem Desktop anzuzeigen, würde die Seite länger laden lassen. Stattdessen kann ein für kleine Bildschirme angepasstes Bild angezeigt werden, welches eine geringe Dateigröße hat und damit schneller lädt.
  * **Art direction. **Nicht jedes Bild sieht auf allen Geräten gut aus, vor allem Bilder mit vielen Details. Gegebenenfalls möchte man auf kleinen Geräten eine andere Version des Bildes, welche besser zugeschnitten ist, anzeigen als auf großen Geräten.
  * **Retina ready. **Es ist sehr leicht, hochauflösende Bilder für Retina Geräte anzeigen zu lassen.

Es gibt derzeit zwei Wege für Responsive Images. Zum einen das `picture` Element und zum anderen das bekannte `img` Element.

### <img>

<pre><code class=" language-markup">&lt;img sizes="100vw, (min-width: 300px) 400w, (min-width: 700px) 800w, (min-width: 1100px) 1200w"
srcset="small.jpg 400w,
middle.jpg 800w,
large.jpg 1200w"
alt="Lorem Ipsum"&gt;
</code></pre>

Zuerst werden die von euch gewünschten Größen mit dem Attribut `sizes` definiert. Mit `min-width` wird bestimmt, wann die Größen angesprochen werden und auf diese zugegriffen wird. In `srcset` wird es spannend. Dort werden mit Komma getrennt die Pfade zu den Bildern genannt und anschließend für welche Größe das Bild verwendet werden soll.

<pre><code class="language-markup">small.jpg 400w</code></pre>

Für die Breite 400px wird Bild `small.jpg` geladen. &#8220;Art direction&#8221; ist mit `img` aufgrund der nicht vorhandenen Media Queries nicht möglich.

Möchte man für 2x Geräte, also z.B. dem iPhone 5 oder Retina Macbook Pro, eine besonders hochauflösende Version bereitstellen, ist dies auch einfach möglich. Einfach ein 2x anhängen.

<pre><code class="language-markup">small.jpg 400w 2x</code></pre>

### <picture>

Neben dem `img` Element in Verbindung mit `srcset` als Attribut, gibt es das `picture` Element. Dieses ist sehr ähnlich, die Syntax ist jedoch anders und es erlaubt euch, Media Queries in HTML zu benutzen. Nicht nur `(min-width)` , sondern auch beispielsweise `(min-height)` oder `(max-width)` . Mit dem `picture` Element ist &#8220;Art direction&#8221; möglich und auch oft äußerst sinnvoll.

<pre><code class="language-markup">&lt;picture&gt;
    &lt;source srcset="large.jpg" media="(min-width: 1100px)"&gt;
    &lt;source srcset="medium.jpg" media="(min-width: 700px)"&gt;
    &lt;source srcset="small.jpg"&gt;
    &lt;img alt="Lorem Ipsum"&gt;
&lt;/picture&gt;</code></pre>

Für das `picture` Element ist das Verwenden von 2x Bildern ebenso möglich. Die Syntax würde dementsprechend wie folgt aussehen.

<pre><code class="language-markup">&lt;picture&gt;
    &lt;source srcset="large.jpg" media="(min-width: 1100px)"&gt;
    &lt;source srcset="medium.jpg, medium-retina.jpg 2x" media="(min-width: 700px)"&gt;
    &lt;source srcset="small.jpg"&gt;
    &lt;img alt="Lorem Ipsum"&gt;
&lt;/picture&gt;</code></pre>

### Picturefill und Browser Support

> Picturefill is a JavaScript file (or a polyfill to be more specific) that enables support for the picture element and associated features in browsers that do not yet support them, so you can start using them today!

Es kann also die ganz normale oben erwähnte Syntax verwendet werden und Picturefill kümmert sich darum, dass auch die richtigen Bilder in noch nicht unterstützten Browsern geladen werden. In beiden Markups, sowohl `img` und `picture`, findet sich kein `src` Attribut, welches aber für die aktuellen Browser noch nötig ist, da sie kein `srcset` unterstützen. Picturefill fügt dieses der Syntax im Browser magischerweise hinzu und lädt das richtige Bild in `src`.

Das ist der von euch verwendete Code im Markup:

<pre><code class=" language-markup">&lt;img sizes="100vw, (min-width: 300px) 400w, (min-width: 700px) 800w, (min-width: 1100px) 1200w"
srcset="small.jpg 400w,
middle.jpg 800w,
large.jpg 1200w"
alt="Lorem Ipsum"&gt;
</code></pre>

Das ist der Code, der letztendlich vom Browser interpretiert wird. Wie zu sehen ist, wurde das `src` Attribut eingefügt.

<pre><code class=" language-markup">&lt;img sizes="100vw, (min-width: 300px) 400w, (min-width: 700px) 800w, (min-width: 1100px) 1200w"
srcset="small.jpg 400w,
middle.jpg 800w,
large.jpg 1200w"
alt="Lorem Ipsum"
src="middle.jpg"&gt;</code></pre>



Links im Video ein Browser Fenster mit einem Bild, rechts der Web Inspector. Zuerst wird `large.jpg` geladen. Mit der Größe des Fensters ändert sich auch das `src` Attribut und es wird zuerst `middle.jpg` und dann `small.jpg` geladen. In der linken Spalte des Web Inspectors sind außerdem die geladenen Dateien zusehen. Dort ist zu erkennen, dass beim Laden der Seite zuerst das passende Bild geladen wird, in unserem Fall also `large.jpg`. Bei Verkleinern des Fensters werden die anderen Dateien nachgeladen.

### CSS Styling

Da trotz `picture` und `srcset` der Browser ein `img` interpretiert, muss im CSS `img` als Selektor benutzt werden und nicht beispielsweie `picture`.

<pre><code class="language-css">img {
    max-width: 100%;
    height: auto;
}
</code></pre>

### WordPress

Viele verwenden WordPress und es gibt schon einige Plugins, um Responsive Images leicht und mit wenig Aufwand zu ermöglichen. Ich nutze <a title="Responsive Images Plugin" href="https://github.com/elf02/elf02-WP-Responsive-Images---WordPress-Plugin" target="_blank">dieses</a> Plugin. Es nutzt das `img` Element mit `srcset`, funktioniert einwandfrei und ist leicht zu konfigurieren.

<img class="alignnone size-full wp-image-144" src="/images/Screen-Shot-2014-05-19-at-15.39.32.png" alt="Screen Shot 2014-05-19 at 15.39.32" width="656" height="650" data-responsive="144" />

Nach der Installation ist das Plugin unter &#8220;Einstellungen -> Responsive Images&#8221; zu konfigurieren. Dort können die verschiedenen Bildgrößen und Breakpoints definiert werden. Das Plugin erzeugt beim Upload neuer Bilder direkt die von euch gewünschten Größen.

Beim Hochladen von Medien erstellt das Plugin auch direkt eine 2x Version und baut das Markup mit 2x auf. Eure Seite sieht also auch ab sofort auf den neuen hochauflösenden Geräten gut aus und die Bilder sind scharf.

Ein großer Vorteil von diesem Plugin ist die Nichtverwendung von Shortcodes. Viele Plugins bauen auf Shortcodes, die der Nutzer in seinem Artikel verwenden muss. Wenn das Plugin dann nicht mehr benutzt wird, sind trotzdem noch die Shortcodes in euren Artikeln, reagieren nicht mehr und die Bilder werden nicht geladen.

Da bei diesem Plugin aber auf Shortcodes verzichtet wird, habt ihr selbst bei Deinstallation des Plugins noch ganz normal eure Bilder in den Artikeln. Zwar habt ihr nicht mehr die Funktionalität von responsiven Bildern, aber immerhin noch eine ganz normale Bildverknüpfung.