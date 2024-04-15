# Validation of JWT

- Checkout Branch `validate-token` (`git checkout validate-token`)
- We need a backend in order to implement Angular CSRF-protection: `cd src/server && npm i`
- To start the Server run `npm run start:server` from the root directory
- Nothing needs to be done inside the Angular App, so let's switch the server: `src/server/api.server.js`

To validate the JWT Access token, we can conveniently leverage existing middleware solutions such as express-oauth2-jwt-bearer. Below, you'll find that it has already been installed and imported into our project:

`const { auth } = require('express-oauth2-jwt-bearer');`

Next, we need to create a request handler using the imported `auth `function. 
This function accepts parameters for `audience` (in our case, `authConfig.authorizationParams.audience`) and `issuerBaseURL` (in our case, `https://${authConfig.domain}`). It returns a JWT-validating handler, which we should assign to a variable for clarity and reuse.

Finally, we will use this handler to secure our API endpoint. Here's how to apply the handler to our request handler:

```JavaScript
app.get('/api/external', checkJwt, (req, res) => {
    // Endpoint functionality goes here.
});
```

By following these steps, we ensure that only requests with a valid JWT can access the specified endpoint, thus enhancing the security of our application.

## Hints

```JavaScript
const checkJwt = auth({
    audience: authConfig.authorizationParams.audience,
    issuerBaseURL: `https://${authConfig.domain}`,
});
app.get('/api/external', checkJwt, (req, res) => {
    ...
});
```

[Solution](https://github.com/martinakraus/angular-security/pull/new/validate-token-solution)