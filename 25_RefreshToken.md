# Use the RefreshToken

- Checkout Branch `refresh-token` (`git checkout refresh-token`)
- In order to enable RefreshTokens we need add a configuration: `useRefreshTokens: true`
- The Auth0 SDK offers a mechanism to fetch a new AccessToken (and RefreshToken) silently without any notice of the user:

```JavaScript
      this.auth.getAccessTokenSilently({cacheMode: 'off'}).pipe(take(1))
```

- Think of a way were we fetch the `AccessToken` every 10 seconds within the `ProfileComponent`
- Open the Network Tab to check if it works

## Hints


```JavaScript
// ProfileComponent

ngOnInit(){
    ...
        setInterval(() => {
      this.auth.getAccessTokenSilently({cacheMode: 'off'}).pipe(take(1)).subscribe(console.log)
    }, 10000)
}
```

[Solution](https://github.com/martinakraus/angular-security/pull/new/refresh-token-solution)