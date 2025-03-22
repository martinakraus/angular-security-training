# Subresource Integrity

- Checkout Branch `sri` (`git checkout sri`)
- We always have loves JQuery - let's add it back to our Angular Application:
- In index.html load the minified version of JQuery 'https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js'
- Implement sub resource integrity (SRI) to check the resource integrity
- Investigate the `dist`-Folder. The `index.html` should have also some SRIs for the application files.

Tools for generating SRI hashes
SRI Hash Generator
The [SRI Hash Generator](https://www.srihash.org/) is an online tool you can use to generate SRI hashes.

### Hints

`ng build --subresource-integrity`

```html
<script
  src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js"
  integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
  crossorigin="anonymous"
></script>
```

[Solution](https://github.com/martinakraus/angular-security/tree/sri-solution)
