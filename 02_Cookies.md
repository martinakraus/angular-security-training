# Cookie Attribute
Assign one or more of the following cookie attributes to the descriptions below:

- Secure
- HttpOnly
- SameSite = Strict | Lax | None
- Expire/Max-Age

# Task 1: E-commerce Website – User Authentication
A user logs into an e-commerce website. The session is maintained via a cookie that stores the user's authentication token. The goal is to ensure that this session cookie cannot be easily stolen or compromised by attackers through client-side scripts or insecure connections. The website supports both HTTP and HTTPS, but all sensitive interactions are only provided over HTTPS.

# Task 2: "Remember Me" Feature
A news website offers a “Stay logged in” option during login, which keeps users logged in even after closing the browser. This function stores a persistent cookie that identifies the user for future sessions. The website is accessible via both HTTP and HTTPS but does not contain particularly sensitive user interactions beyond the login.

# Task 3: Third-Party Analytics Service
A website uses a third-party analytics service to track user behavior for marketing purposes. The analytics script sets a tracking cookie to identify users across sessions. This cookie is not essential for the website’s functionality but is useful for analyzing user behavior. The website is operated exclusively over HTTPS, and user privacy protection is a high priority.


[Solution](hhttps://github.com/martinakraus/angular-security-training/blob/solution/02_Cookies.md)
