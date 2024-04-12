# Trusted Types in Angular

- Checkout Branch `trusted-types` (`git checkout trusted-types`)
- Visiting `localhost:4200` you should see many Browser Errors due to `trusted-types`-CSP policy
- Angular also has a built-in Trusted Types policy to re-enable the use of bypassSecurityTrustHtml(). By adding angular#unsafe-bypass to the CSP configuration, Angular is allowed to assign unsanitized data to [innerHTML]
- Fix the errors by adding `angular#unsafe-bypass` to the CSP configuration
- Fix the last error by using safe sinks like `document.createElement('img')` and `this.div.nativeElement.appendChild(img)`

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
    <meta http-equiv="Content-Security-Policy" content="trusted-types angular angular#unsafe-bypass; require-trusted-types-for 'script'">
```