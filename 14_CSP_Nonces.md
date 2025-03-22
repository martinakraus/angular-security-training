# Content-Security-Policy Level Nonces

### CSP Nonces

- Checkout Branch `csp-nonces` (`git checkout csp-nonces`)
- Make sure the XSS attack takes place so we know we mitigate it with the CSP Header
- Now we need to configure our CSP Nonces on the server:
- Insert the Angular 'ngCspNonce'-Attribute to the `app-root`-HTML Tag and set the Value to 'myRandomNonce'
- Open the `server.js`-File and set the Content-Security-Policy we have used previously. But this time insert the calculated `nonce`-Value inside the `script-src`-Attribute instead of an Hash-Value
- The Angular App is now build before and will be delivered from our server as static content. So it run on `http://localhost:3000`. If we change something on the Angular App, wenn need to build it again (restart `npm start`)

### Hints

```javascript
//server.js
const modifiedHtml = data.replace(/myRandomNonce/g, nonce);
...
res.setHeader(
  "Content-Security-Policy",
  `default-src 'none'; script-src 'self' 'nonce-${nonce}'; connect-src 'self' http://localhost:4730; img-src 'self'; style-src 'self' 'unsafe-inline';`
);
```

```html
<app-root ngCspNonce="myRandomNonce"></app-root>
```

[Solution](https://github.com/martinakraus/angular-security-2025/tree/csp-nonces-solution)
