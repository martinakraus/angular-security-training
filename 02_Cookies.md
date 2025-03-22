# Cookie Attribute

## Aufgabe 1: E-Commerce Webseite: Authentifizierung eines Nutzer

E-commerce Website: User Authentication
Ein Benutzer meldet sich auf einer E-Commerce-Website an. Die Sitzung wird über ein Cookie aufrechterhalten, das den Authentifizierungs-Token des Benutzers speichert. Das Ziel ist sicherzustellen, dass dieses Sitzungs-Cookie nicht einfach von Angreifern durch clientseitige Skripte oder über unsichere Verbindungen gestohlen oder kompromittiert werden kann. Die Website unterstützt sowohl HTTP als auch HTTPS, wobei alle sensiblen Interaktionen ausschließlich über HTTPS bereitgestellt werden.

### Möglichen Attribute:

- Secure: Stellt sicher, dass das Cookie nur über HTTPS gesendet wird, um es vor Abfangversuchen bei unsicheren Verbindungen zu schützen.
- HttpOnly: Verhindert den Zugriff von Client-seitigen Skripten (wie JavaScript) auf das Cookie und reduziert das Risiko von XSS-Angriffen.
- SameSite: Strict oder Lax – hilft, Cross-Site-Request-Forgery-Angriffe (CSRF) zu verhindern, indem eingeschränkt wird, wann das Cookie mit Anfragen gesendet wird, die von anderen Websites stammen.
- Expires/Max-Age: Optional – typischerweise benötigt ein Sitzungs-Cookie keine Ablaufzeit, aber diese kann entsprechend der Sitzungsdauer festgelegt werden, falls gewünscht.

## Aufgabe 2: 'Remember me'-Feature

Eine Nachrichten-Website bietet während des Logins eine „Angemeldet bleiben“-Option an, die Nutzer auch nach dem Schließen des Browsers angemeldet hält. Diese Funktion speichert ein persistentes Cookie, das den Nutzer für zukünftige Sitzungen identifiziert. Die Website ist sowohl über HTTP als auch HTTPS zugänglich, enthält jedoch keine besonders sensiblen Nutzerinteraktionen außer dem Login.

### Möglichen Attribute:

- Secure: Ja – auch wenn keine sensiblen Daten verarbeitet werden, sollte das Cookie nur über HTTPS gesendet werden, um Abfangen zu verhindern.
- HttpOnly: Ja – auch wenn das Risiko von XSS geringer sein könnte, sollte diese Option gesetzt werden, um unnötigen Zugriff auf das Cookie durch Client-seitige Skripte zu verhindern.
- SameSite: Lax – erlaubt das Senden des Cookies bei Top-Level-Navigationen, bietet aber dennoch einen grundlegenden Schutz gegen CSRF-Angriffe.
- Expires/Max-Age: Ja – da es sich um ein persistentes Cookie handelt, sollte eine Ablaufzeit definiert sein (z. B. 30 Tage), um die Lebensdauer zu begrenzen.

## Aufgabe 3: Ein Drittanbieter-Analysedienst

Eine Website verwendet einen Drittanbieter-Analysedienst, um das Nutzerverhalten zu Marketingzwecken zu verfolgen. Das Analyse-Skript setzt ein Tracking-Cookie, um Nutzer über Sitzungen hinweg zu identifizieren. Dieses Cookie ist nicht essenziell für die Funktionalität der Website, aber hilfreich zur Analyse des Nutzerverhaltens. Die Website wird ausschließlich über HTTPS betrieben, wobei der Schutz der Privatsphäre der Nutzer eine hohe Priorität hat.

### Möglichen Attribute:

- Secure: Ja – stellt sicher, dass das Cookie nur über HTTPS übertragen wird, um es vor Abfangen im Netzwerk zu schützen.
- HttpOnly: Nein – Drittanbieter-Analysen benötigen häufig Client-seitigen Zugriff auf das Cookie für Tracking-Zwecke, daher sollte diese Option nicht gesetzt werden.
- SameSite: None – Drittanbieter-Cookies müssen in der Regel mit Anfragen über verschiedene Websites hinweg gesendet werden, daher ermöglicht diese Einstellung die plattformübergreifende Nutzung.
- Expires/Max-Age: Ja – da es sich um ein Tracking-Cookie handelt, sollte eine angemessene Ablaufzeit definiert sein, z. B. 1 Jahr, abhängig von den Datenschutzrichtlinien.
