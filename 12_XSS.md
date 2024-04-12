# XSS Protection in Angular

- Make sure you followed the steps in `10_Setup.md`
- Checkout Branch `xss` (`git checkout xss`)
- Inject following malicious JavaScript inside the `Abstract`-Input field: `<iframe src="javascript:alert('xss')">`
- Investigate the Angular Code - Do you know how the attack could happen?
- Fix the Issue
