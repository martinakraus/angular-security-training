# Execute XSS attack inside an Angular App

- Make sure you followed the steps in `10_Setup.md`
- Checkout Branch `xss-attack` (`git checkout xss-attack`)
- Inject following malicious JavaScript inside the `Abstract`-Input field: `<iframe src="javascript:alert('xss')">`
- Investigate the Angular Code - Do you know how the attack could happen?
- Fix the Issue

[Solution](https://github.com/martinakraus/angular-security-2025/tree/xss-attack-solution)
