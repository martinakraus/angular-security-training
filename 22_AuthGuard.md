# Protect the profile and book routes with a guard.

- Checkout Branch `auth-guard` (`git checkout auth-guard`)

Some pages inside our Angular application should be protected unless the user is authenticated.
For that the `Auth0-SDK` provides a build in Route-Guard-Function to add as an `CanActivate` Guard.

- Update the `AppRoutingModule` by adding the `AuthGuard` to following routes:
  - 'profile'
  - 'books'

**After you added the `authGuardFn` you should not be able to visit the `profile` Route without signing in.**

## Hints

```JavaScript
// src/app/app-routes.ts

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuardFn]
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.routes').then(mod => mod.bookRoutes),
    canMatch: [authGuardFn]
  }

```

[Solution](https://github.com/martinakraus/angular-security/pull/new/auth-guard-solution)
