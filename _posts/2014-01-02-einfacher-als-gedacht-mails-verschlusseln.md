---
title: 'Einfacher als gedacht: Mails verschlüsseln'
author: jonas
excerpt: Besonders nach dem Congress, aber auch schon früher fühlte ich mich mit einem Gmail Account und unverschlüsselten Mails unwohl. Bisher hatte ich noch nichts verändert, weil ich der Meinung war, dass es kompliziert und mit viel Aufwand verbunden ist. Ich lag falsch, es ist einfach. Jeder sollte Mails verschlüsseln.
layout: post
permalink: /einfacher-als-gedacht-mails-verschlusseln/
categories:
  - Allgemein
---
Besonders nach dem [Congress][1], aber auch schon früher fühlte ich mich mit einem Gmail Account und unverschlüsselten Mails unwohl. Bisher hatte ich noch nichts verändert, weil ich der Meinung war, dass es kompliziert und mit viel Aufwand verbunden ist. **Ich lag falsch, es ist einfach. Jeder sollte Mails verschlüsseln.**

Meistens sind die Transportwege der Mails über SSL verschlüsselt, doch ist eine &#8220;Ende-zu-Ende Verschlüsselung&#8221; noch wichtiger und notwendig, damit keiner mitlesen kann. Mithilfe dieses Verfahren kann nur der Empfänger die Nachricht entschlüsseln.

### S/MIME

S/MIME ist ein Standard, der in den meisten Mail Clients integriert, z.B. Mail.app auf dem Mac und iOS. Smartphones können damit auch umgehen, einziges Problem ist die Verwendung von z.B. Yahoo oder Gmail in Browsern. Dort ist es ohne Tricks nicht möglich, es gibt jedoch Browser Erweiterungen, die selbst ein Zugreifen auf verschlüsselte Nachrichten im Browser ermöglichen.

Bei Gmail sieht es so aus, wenn man verschlüsselte Mails bekommt. **Die Mail ist wirklich nur im Client auf dem Computer lesbar.**

[<img class="alignnone size-full wp-image-20" src="/images/gmail.png" alt="gmail" width="520" height="335" data-responsive="20" />][2]

Eine Alternative zu S/MIME wäre PGP. Der Nachteil ist jedoch, dass PGP in den wenigsten Mail Clients verbaut ist, deswegen zusätzliche Programme benötigt werden und dies den ganzen Aufwand erhöht. **S/MIME und PGP wurden noch nicht geknackt, von daher sind es sehr sichere Standards.**

### Was bietet mir S/MIME?

  * Der Empfänger kann sich sicher sein, dass die Mail wirklich vom richtigen Absender verschickt und nicht verändert wurde.
  * Die Mail wird verschlüsselt übermittelt.

### Wie funktioniert S/MIME?

Keine Detailerklärung, [hier ist der Link zur Wikipedia][3]. Zur Verschlüsselung einer Mail muss der Absender den öffentlichen Schlüssel des Empfängers kennen. Das passiert in der ersten Nachricht, **welche nicht verschlüsselt wird**. So wird verschlüsselt, wenn möglich, und nicht verschlüsselt gesendet, wenn nicht möglich.

### Was benötige ich für S/MIME?

Für S/MIME wird ein Zertifikat benötigt. Es gibt einige kostenlose, ich benutze eines von [Comodo (auch kostenlos)][4]. Es gibt aber auch kostenpflichtige Zertifikate z.B. von der [Sparkasse][5]. Dem Anbieter muss man soweit vertrauen, dass wenn der Anbieter gehackt wird und jemand anderes an eure Zertifikate kommt, die Verschlüsselung sinnlos war.

Anschließend erhält man eine Mail zu einem Download Link, eine .p7s Datei. Diese einfach doppelklicken und auf dem Mac öffnet sich die Schlüsselband Verwaltung. Im Folgenden wird kurz die Installation auf Mac und iOS erklärt. Es finden sich aber etliche Anleitungen zu Windows, Linux, Android (einfach googlen) und Windows Phone 8 ([Guter Witz, es geht nicht.][6]) im Netz.

### Mac (Apple Mail)

Nach Installation des Zertifikats im Schlüsselbund, einfach Apple Mail schließen und neu starten. Um das Ganze zu testen, einfach eine Mail an sich selbst schicken. Bei Eingabe einer Mail Adresse, die die Verschlüsselung unterstützt, werden zusätzlich zwei Buttons angezeigt.

Und so sieht dann eine angekommene Mail aus.

[<img class="alignnone size-full wp-image-23" src="/images/mac-mail-received.png" alt="mac-mail-received" width="742" height="178" data-responsive="23" />][7]

### iOS (Apple Mail)

In der Schlüsselbund Verwaltung einfach nach eurer Mail Adresse suchen und das Zertifikat exportieren (Rechtsklick -> Export). Wichtig zu beachten ist, dass ihr das .p12 (Personal Information Exchange) Format auswählt, damit es mit iOS funktioniert. Um das Zertifikat auf dem iPhone installiert zu bekommen, gibt es mehrere Möglichkeiten:

  1. Per Mail an sich selbst schicken, diese Mail auf dem iPhone öffnen und auf das Zertifikat im Anhang tippen. Anschließend wird es installiert. (unsicher, weil diese Mail noch nicht verschlüsselt ist.)</p> 
  2. Per [iPhone Konfigurationsprogramm][8]. iPhone an den Mac anschließen und ein neues Konfigurationsprofil erstellen, in dem ihr euer vorher exportiertes Zertifikat als Zertifikat hinzufügt und Namen etc. eingebt. Anschließend in der Seitenleiste das iPhone auswählen und das erstellte Profil installieren. (sehr sicher)

Unter &#8220;Mail, Kontakte, Kalender&#8221; -> [euer Mail Account] -> &#8220;Account&#8221; -> &#8220;Erweitert&#8221; unten S/MIME aktivieren und unter &#8220;Signieren&#8221; und &#8220;Verschlüsseln&#8221; das Zertifikat auswählen.

[<img class="alignnone size-full wp-image-21" src="/images/ios-screenshots.png" alt="ios-screenshots" width="1280" height="500" data-responsive="21" />][9]

Beim Senden sieht es dann so aus.

[<img class="alignnone size-full wp-image-25" src="/images/send-iOS.png" alt="send-iOS" width="645" height="540" data-responsive="25" />][10]

### Fazit

Seine Mails zu verschlüsseln, ist einfacher als es viele vermuten. **Es kostet maximal 30 Minuten eurer Zeit und gibt euch und euren Mitmenschen viel Sicherheit.** Was spricht dagegen? Nichts. Und genau deswegen solltet ihr es tun. Und wenn ihr nun eine Verschlüsselung benutzt, erzählt anderen davon, dass es nicht schwierig und sogar kostenlos ist, damit mehr Menschen, ihre Mails verschlüsseln. Und selbst wenn ihr &#8220;nichts zu verbergen&#8221; habt, tut euch den Gefallen, es trotzdem zu tun. Es kann nicht schaden und vielleicht helft ihr damit euren Mitmenschen. Auf jeden Fall unterstützt ihr z.B. die NSA nicht, was schon Grund genug sein dürfte.

**Einrichtungen wie die NSA werden wir nicht aufhalten, wir können uns nur bestmöglich schützen.**

[Quelle Thumbnail][11], [Creative Commons License][12]

 [1]: http://jonas.re/artikel/30c3
 [2]: http://jonas.re/wp-content/uploads/2014/04/gmail.png
 [3]: http://de.wikipedia.org/wiki/S/MIME
 [4]: http://www.comodo.com/home/email-security/free-email-certificate.php
 [5]: https://www.s-trust.de/produkte/email_zertifikat/
 [6]: http://social.msdn.microsoft.com/Forums/wpapps/en-US/f7f9d05c-1273-440d-8406-021e2ffaa8c1/how-to-create-an-smime-message-in-windows-phone-8
 [7]: http://jonas.re/wp-content/uploads/2014/04/mac-mail-received.png
 [8]: http://support.apple.com/kb/DL1465?viewlocale=de_DE
 [9]: http://jonas.re/wp-content/uploads/2014/04/ios-screenshots.png
 [10]: http://jonas.re/wp-content/uploads/2014/04/send-iOS.png
 [11]: http://www.flickr.com/photos/52811793@N02/9290580612/in/photolist-f9YDWm-dUdmAN-adznTJ-8ugpEY-bpXBVE-b64tiX-aZ6T88-db5CgZ-db5G9q-db5ELs-bwXa7M-bvgpXG-89HLXM-b5Qhdx-a4DeYU-9VGMy6-e8bVWw-9efNDk-aFcM7U-bJcmCV-bjEU6B-iLk5BT-bvtXeA-81YSTQ-9NeR4W-d7fd2f-bqh6Ns-cTyb9m-bKQjXt-8uRHPJ-8ErZXz-doDMuG-eeBugb-7WbQAM-abkHUX-9N1vUD-dABB41-d8iwHQ-8xu5pH-e2DYuC-7N9rAV-7NdrdN-fpRyy4-89jcWA-94a2R4-8nqPrt-8ntYGj-io2Nnz-9bznkB-gTzKvw-gUinRJ
 [12]: http://creativecommons.org/licenses/by-nc-sa/2.0/