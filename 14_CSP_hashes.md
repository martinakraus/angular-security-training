# Content-Security-Policy 

### CSP Hashes
- This is an follow up task for the Branch `csp` (`git checkout csp`)
- In index.html, declare an arbitrary inline scripting : `<script>document.write('<h1>Inline scripting is <b>not recommended</b>! But if you have not the choice, <b>secure your app with CSP</b></h1>');</script>`
- Update the CSP in order to allow this inline scripting securely (consider CSP3 SHA-256 hash syntax)

Hints : To generate the hash of the script content, use this online tool : [Report-Uri Hash](https://report-uri.com/home/hash) (beware of spaces and carriage returns...)

### Hints

- This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg inline scripting, inline styles, object, frame, media, etc). It is a good starting point but often too restrictive for many existing sites
- You can declare your CSP as a meta tag with http-equiv directive in index.html :<meta http-equiv="__directive__" content="__value__">
- If your website is online you can check the security level of this CSP on csp-evaluator.withgoogle.com/

[Solution](https://github.com/martinakraus/angular-security/tree/csp-hashes-solution)
