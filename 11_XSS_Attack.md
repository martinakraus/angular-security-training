# Perform a DOM XSS attack

- Visit the website `https://juice-shop.herokuapp.com/#/score-board?categories=XSS`
- Look for a URL parameter where its value appears on the page it is leading to and is set by an user input
- Try probing for XSS vulnerabilities by submitting malicious JavaScript Code: `<iframe src="javascript:alert('xss')">`.
