# Content-Security-Policy 

### Basic CSP
- Checkout Branch `csp` (`git checkout csp`)
- Configure a minimalistic CSP in angular side (index.html) 
with the following value and observe the result 
(see console log): 
`default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';`
- Update step by step the configuration in order to make the website load properly


### Hints

- This policy allows images, scripts, AJAX, and CSS from the same origin, and does not allow any other resources to load (eg inline scripting, inline styles, object, frame, media, etc). It is a good starting point but often too restrictive for many existing sites
- You can declare your CSP as a meta tag with http-equiv directive in index.html :<meta http-equiv="__directive__" content="__value__">
- If your website is online you can check the security level of this CSP on csp-evaluator.withgoogle.com/

[Solution](https://github.com/martinakraus/angular-security/tree/csp-solution)
