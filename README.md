# Maybe set link target

jQuery script which parses all specified link tags, analyses the URLs. If the URL is an external link and matches the following conditions, then the `target` attribute is set to `_blank`.

* Does not already have an explicit `target` attribute
* Is not an anchor link.
* Is not in the same domain as the current page
* Is not in the `www` subdomain of the current page
* Not a `javascript` link
* Not a `mailto:` link
* Does not have the CSS class `anchor`
* Does not have the CSS class `fancybox`
* Does not have the CSS class `toggle`

## Usage

```javascript
$('a').maybeSetLinkTarget();
```

## Changelog

### 1.0.1 2019-02-15

* Fix null matching in URL parsing

### 1.0.0 2019-01-18

* Initial NPM version