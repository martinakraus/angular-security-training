# Integration of Identity Provider

## Add Login and Logout functions

- Checkout Branch `integrate-ip` (`git checkout integrate-ip`)
- Configure Auth0 with you Angular App:
- Open `app.config.ts` and insert Domain and ClientID (The provideAuth0 function takes the properties domain and clientId) 

```
 domain: 'dev-codekittey.eu.auth0.com',  
 clientId: 'PqrUSlrGpMGqBFK9NbjHWZBej8yV8oNY',
```

### Add Login to Your Application

The Auth0 Angular SDK gives you tools to quickly implement user authentication in your Angular application, such as creating a login button using the `loginWithRedirect()` method from the `AuthService`, `loginWithRedirect()` redirects your users to the Auth0 Universal Login Page, where Auth0 can authenticate them. Upon successful authentication, Auth0 will redirect your users back to your application.

### Add Logout to Your Application

Now that you can log in to your Angular application, you need a way to log out. You can create a logout button using the logout() method from the AuthService service. Executing logout() redirects your users to your Auth0 logout endpoint (https://YOUR_DOMAIN/v2/logout) and then immediately redirects them to your application.
Specify the returnTo option when calling logout to tell Auth0 where it should redirect to after a successful logout.

### Insert Buttons in NavigationComponent

- The `AuthService` provides you an Observable `isAuthenticated$` withem you can always check the authentication state
- Use this state to toggle the `LoginButtonComponent` and `LogoutButtonComponent`

## Hints

```JavaScript

// LoginButtonComponent
import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  standalone: true
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) {}
}

```

```JavaScript
// LogoutButtonComponent

export class LogoutButtonComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);

  logout() {
    this.auth.logout({logoutParams: {returnTo: this.doc.location.origin}});
  }
}
```


[Solution](https://github.com/martinakraus/angular-security/pull/new/integrate-ip-solution)