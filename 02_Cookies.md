# Cookie Attribute

Weisen sie den folgenden Beschreibungen ein oder mehrere passende folgende Cookie Attribute zu:

- Secure
- HttpOnly
- SameSite= Strict | Lax | None
- Expire/Max-Age

## Aufgabe 1: E-Commerce Webseite: Authentifizierung eines Nutzer

Ein Benutzer meldet sich auf einer E-Commerce-Website an. Die Sitzung wird über ein Cookie aufrechterhalten, das den Authentifizierungs-Token des Benutzers speichert. Das Ziel ist sicherzustellen, dass dieses Sitzungs-Cookie nicht einfach von Angreifern durch clientseitige Skripte oder über unsichere Verbindungen gestohlen oder kompromittiert werden kann. Die Website unterstützt sowohl HTTP als auch HTTPS, wobei alle sensiblen Interaktionen ausschließlich über HTTPS bereitgestellt werden.

## Aufgabe 2: 'Remember me'-Feature

Eine Nachrichten-Website bietet während des Logins eine „Angemeldet bleiben“-Option an, die Nutzer auch nach dem Schließen des Browsers angemeldet hält. Diese Funktion speichert ein persistentes Cookie, das den Nutzer für zukünftige Sitzungen identifiziert. Die Website ist sowohl über HTTP als auch HTTPS zugänglich, enthält jedoch keine besonders sensiblen Nutzerinteraktionen außer dem Login.

## Aufgabe 3: Ein Drittanbieter-Analysedienst

Eine Website verwendet einen Drittanbieter-Analysedienst, um das Nutzerverhalten zu Marketingzwecken zu verfolgen. Das Analyse-Skript setzt ein Tracking-Cookie, um Nutzer über Sitzungen hinweg zu identifizieren. Dieses Cookie ist nicht essenziell für die Funktionalität der Website, aber hilfreich zur Analyse des Nutzerverhaltens. Die Website wird ausschließlich über HTTPS betrieben, wobei der Schutz der Privatsphäre der Nutzer eine hohe Priorität hat.

[Solution](hhttps://github.com/martinakraus/angular-security-training/blob/solution/02_Cookies.md)
