# Cookie Attributes
## Task 1: E-commerce Website – User Authentication
A user logs into an e-commerce website. The session is maintained via a cookie that stores the user's authentication token. The goal is to ensure that this session cookie cannot easily be stolen or compromised by attackers through client-side scripts or insecure connections. The website supports both HTTP and HTTPS, but all sensitive interactions are only provided over HTTPS.

Possible Attributes:
- Secure: Ensures that the cookie is only sent over HTTPS to protect it from being intercepted over insecure connections.
- HttpOnly: Prevents client-side scripts (like JavaScript) from accessing the cookie, reducing the risk of XSS attacks.
- SameSite: Strict or Lax – helps prevent Cross-Site Request Forgery (CSRF) attacks by restricting when the cookie is sent with cross-site requests.
- Expires/Max-Age: Optional – typically, a session cookie doesn’t require an expiration time, but one can be set to define the session duration if desired.

## Task 2: "Remember Me" Feature
A news website offers a “stay logged in” option during login, keeping users logged in even after closing the browser. This function stores a persistent cookie that identifies the user for future sessions. The website is accessible via both HTTP and HTTPS but doesn’t involve particularly sensitive user interactions beyond the login.

Possible Attributes:
- Secure: Yes – even if no highly sensitive data is processed, the cookie should only be sent over HTTPS to prevent interception.
- HttpOnly: Yes – even if the XSS risk is lower, this option should be enabled to prevent unnecessary access to the cookie by client-side scripts.
- SameSite: Lax – allows the cookie to be sent with top-level navigations while still offering basic CSRF protection.
- Expires/Max-Age: Yes – since this is a persistent cookie, an expiration time should be defined (e.g., 30 days) to limit its lifetime.

# Task 3: Third-Party Analytics Service
A website uses a third-party analytics service to track user behavior for marketing purposes. The analytics script sets a tracking cookie to identify users across sessions. This cookie is not essential for the website’s functionality but helps with analyzing user behavior. The website is operated exclusively over HTTPS, and protecting user privacy is a high priority.

Possible Attributes:
- Secure: Yes – ensures the cookie is only sent over HTTPS to protect it from being intercepted on the network.
- HttpOnly: No – third-party analytics often require client-side access to the cookie for tracking purposes, so this option should not be enabled.
- SameSite: None – third-party cookies typically need to be sent with cross-site requests, so this setting allows cross-site usage.
- Expires/Max-Age: Yes – since this is a tracking cookie, a suitable expiration time should be defined (e.g., 1 year), depending on the privacy policy.
