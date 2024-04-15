# Show User Profile Information

- Checkout Branch `user-profile` (`git checkout user-profile`)
The Auth0 Angular SDK helps you retrieve the profile information associated with logged-in users quickly in whatever component you need, such as their name or profile picture, to personalize the user interface. The profile information is available through the user$ observable exposed by the AuthService service.
This Observable represents all information from the `idToken`

Verify that you can display the user.name or any other
user
property within the `ProfileComponent` correctly after you have logged in.


## Hints

```JavaScript
// ProfileComponent

    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
```


[Solution](https://github.com/martinakraus/angular-security/pull/new/user-profile-solution
)