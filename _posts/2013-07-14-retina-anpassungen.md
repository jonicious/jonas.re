---
title: Retina Anpassungen
author: jonas
excerpt: Retina Displays finden eine immer größere Nutzerschaft und Apple stattet immer mehr Geräte mit den hochauflösenden Displays aus. Aber auch andere Hersteller setzen auf hochauflösende Displays. Um den Benutzer die best mögliche Qualität zu bieten, ist es nötig, seine Seite an die HiDPI Displays anzupassen. Text benötigt keine Anpassung, jedoch müssen Grafiken und Bilder optimiert werden. Bei der Nutzung von vielen Icons, die noch als Grafik geladen werden, kann es von Vorteil sein, eine so genannte Icon Font (z.B. Font Awesome) einzusetzen. Eine gute Übersicht und Erklärung zu Icon Fonts bietet dieser Artikel.
layout: post
permalink: /retina-anpassungen/
categories:
  - Allgemein
---
Retina Displays finden eine immer größere Nutzerschaft und Apple stattet immer mehr Geräte mit den hochauflösenden Displays aus. Aber auch andere Hersteller setzen auf hochauflösende Displays. Um den Benutzer die best mögliche Qualität zu bieten, ist es nötig, seine Seite an die HiDPI Displays anzupassen. Text benötigt keine Anpassung, jedoch müssen Grafiken und Bilder optimiert werden. Bei der Nutzung von vielen Icons, die noch als Grafik geladen werden, kann es von Vorteil sein, eine so genannte Icon Font (z.B. Font Awesome) einzusetzen. Eine gute Übersicht und Erklärung zu Icon Fonts bietet dieser Artikel.

### WordPress

Einer der meist benutzten CMS (Content Managment System) ist WordPress. Auch ich nutze für diese Seite WordPress, da es alle Funktionen mitbringt, einfach zu bedienen ist und sehr gut dokumentiert ist. Es gibt auch zahlreiche Plugins, die es erlauben, einige tolle Funktionen einzubauen. Eines von vielen ist WP Retina 2x. Viele Dinge, die ich im folgenden erkläre, treffen aber auch auf Seiten zu, die nicht WordPress, sondern ein anderes CMS, benutzen.

### WP Retina 2x

Hier kommt ein WordPress Plugin zum Einsatz, was die Hauptaufgabe abnimmt. WP Retina 2x erstellt bei jedem Upload eines Bildes eine @2x Version. Die @2x Version wird später geladen, wenn ein Retina Gerät auf unsere Seite zugreift. Greift ein Gerät mit noch normal auflösenden Display auf die Seite zu, wird das normale Bild (nicht die @2x Version) geladen. Natürlich bietet das Plugin auch einige Einstellungsmöglichkeiten.

Zum einen können wir einstellen, für welche Bildergrößen eine zweite hochauflösende Version erstellt wird, zum anderen können wir auswählen, ob eine hochaufgelöste Version direkt beim Upload eines Bildes erstellt werden soll. Übrigens, selbst von bereits hochgeladenen Bildern kann nachträglich eine Retina Version erstellt werden.

Eine kleine Einschränkung gibt es leider, denn WP Retina 2x kann erst bei Bilder einer Größe ab 1200x1200px eine hochauflösende Version erstellen. Bei kleinen Icons oder Grafiken muss selbst Hand angelegt werden. Generell aber auch nicht schwierig, denn die Grafiken müssen einfach in der doppelten Auflösung (von 60x60px zu 120x120px) vorliegen. Wichtig hierbei ist auch noch, dass an den Dateinamen ein @2x angehängt werden muss.

### Retina.js

Doch wie erkennt jetzt die Seite, welche Version gerade benötigt wird? Hier springt Retina.js ein, was auch sehr gut mit WP Retina 2x harmoniert. Wie sich vielleicht schon an der Dateiendung erkennen lässt, handelt es sich hierbei einfach um ein kleines Javascript, welches erkennt, ob die Seite von einem Gerät mit hochauflösenden Display oder einem Gerät mit normalen Display abgerufen wird. Benutzt der Benutzer ein iPad mit Retina Screen, überprüft Retina.js ob eine @2x Version des Bildes vorliegt. Wenn dem so ist, wird diese geladen.

Ein kleiner Download ist nötig und dann muss die heruntergeladene Datei nur noch richtig eingebunden werden, wie auf der Seite erklärt wird.

Warum zwei Versionen eines Bildes?  
Besonders, wenn man für mobile Geräte designed, ist es wichtig, dass die Seite schnell und bei noch geringer Datenleitung lädt und funktioniert. Außerdem wäre es unnötige Verschwendung von Daten, immer, also auch bei Geräten ohne hochauflösendes Display, die “gute” Version des Bildes zu laden und somit die Ladezeiten zu vergrößern.

<p style="text-align: center;">
  ***
</p>

Geräte mit Retina Display finden immer größere Bedeutung und Verbreitung, warum die eigene Seite an den baldigen Standard angepasst werden sollte. WP Retina 2x bietet eine gute Möglichkeit, um die eigene WordPress Seite schnell und einfach an das Retina Display anzupassen. Es hat noch etwas Luft nach oben, jedoch arbeiten die Entwickler regelmäßig daran, dass Plugin besser zu machen und es erscheinen regelmäßig Updates.

Ich denke, dass es bald noch bessere Möglichkeiten gibt, Seiten an hochauflösende Displays anzupassen. Ist dies der Fall, werde ich darüber schreiben. Ergeben sich fragen, einfach mich kontaktieren.