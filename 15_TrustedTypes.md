# Trusted Types in Angular

- Checkout Branch `angular-trusted-types` (`git checkout angular-trusted-types`)
- Visiting `localhost:4200` the side looks different now
- Inside the textbox uou should see already some malicious JavaScript inside
- By clicking on the Button 'Render data' you should see many Browser Errors due to `trusted-types`-CSP policy
- Angular also has a built-in Trusted Types policy to re-enable the use of bypassSecurityTrustHtml(). By adding angular#unsafe-bypass to the CSP configuration, Angular is allowed to assign unsanitized data to [innerHTML]
- Fix the errors by adding `angular#unsafe-bypass` to the CSP configuration
- Fix the last error by using safe DOM API sinks like `document.createElement('img')` and `this.div.nativeElement.appendChild(img)`
- If no Error is displayed anymore you should get two pop-ups after clicking on 'Render data' again

### Hints

```JavaScript

// app.component.ts

  renderData() {
    ...
    // Div 3
    this.div.nativeElement.textContent = '';
    const img = document.createElement('img');
    img.src = 'none';
    this.div.nativeElement.appendChild(img);
  }

```

```html
<!--index.html-->
<meta
  http-equiv="Content-Security-Policy"
  content="trusted-types angular angular#unsafe-bypass; require-trusted-types-for 'script'"
/>
```

[Solution](https://github.com/martinakraus/angular-security-2025/tree/angular-trusted-types-solution)
