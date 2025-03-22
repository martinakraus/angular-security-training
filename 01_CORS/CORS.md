# Cross Origin Ressource Sharing

## Preperation

1. Open the application `cors-app`
2. Follow the setup steps inside the `README.md`-file

## Task: Configure CORS

If you try to login you'll get an CORS error.
Inside the `index.html` you also see that the `POST` Request is made to our API which has the Origin `http://localhost:4000`

1. Configure CORS in order to make the Login-Request work
2. Change the config in order to just allow:

- the origin `http://localhost:3000`
- The POST-Method
- Only the two Request-Header: `Content-Type` and `X-Custom-Header`

Check the results inside the Developer Tools in your Web Browser.
By checking the Response Header on the `login`-Request you should see your configured `access-control-allow-*`-Header.

### Bonus: Send Credentials

Inside the `index.html`-file you'll finde another

## Hint

The cors-middleware takes following object in order to configure cors further:

```javascript
interface CorsOptions {
  /**
   * @default '*''
   */
  origin?: string | undefined;
  /**
   * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
   */
  methods?: string | string[] | undefined;
  allowedHeaders?: string | string[] | undefined;
  exposedHeaders?: string | string[] | undefined;
  credentials?: boolean | undefined;
  maxAge?: number | undefined;
}
```

[Solution](https://github.com/martinakraus/angular-security-training/tree/solution/01_CORS)
