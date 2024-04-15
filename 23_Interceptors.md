# Call a protected endpoint using an HttpInterceptor

- Checkout Branch `interceptor` (`git checkout interceptor`)
- We need a backend in order to implement Angular CSRF-protection: `cd src/server && npm i`
- To start the Server run `npm run start:server` from the root directory

Not everyone should have access to our data. That said most backends protecting their API and we need an AccessToken that prooves 
we have the right privileges to access the data.
This is done by setting the `Authorization` Header inside our Http Requests. We could do this manually on each
request, or we use an Angular Interceptor.
These Interceptors intercepts an Http call before it gets send out to the API. Hence we can easily apply the `Authorization` inside
our Interceptor

The Auth0-SDK already provides us an InterceptorFunction `authHttpInterceptorFn` doing this already out of the box.

### Import the HTTP_INTERCEPTORS token and the AuthHttpInterceptor

- Provide the `authHttpInterceptorFn` withing the config `withInterceptors`-Method inside the `provideHttpClient`-Function
- Update the configuration of the `provideAuth0`:

```javascript
    provideAuth0({
      ...
      authorizationParams: {
        ...
        audience: apiUri
      },
      httpInterceptor: {
        allowedList: [`${apiUri}/*`],
      }
    }),

```

- Open the `ProtectedComponent` and send an API Request within the click-handler `sendRequest` to `http://localhost:3001/api/external` and assign the Response to the `response` Property

**After you have applied everything you should see in your network tab that the request to the protected API has a Authorization Header**

## Hints

```JavaScript

// ProtectedComponent
    this.httpClient.get('http://localhost:3001/api/external').pipe(take(1)).subscribe(
      res => this.response = res
    )
```

[Solution](https://github.com/martinakraus/angular-security/pull/new/interceptor-solution)