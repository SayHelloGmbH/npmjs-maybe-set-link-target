# Maybe set link target

Vanilla ES6 JavaScript which parses all specified link tags and analyses the URLs. If the URL is an external link and matches the following conditions, then the `target` attribute is set to `_blank`.

-   Does not already have an explicit `target` attribute
-   Is not in the same domain as the current page
-   Is not in the `www` subdomain of the current page
-   Not a `javascript` link
-   Not a `mailto:` link
-   Does not have the data attibute `fancybox`
-   Does not have the data attibute `fslightbox`

## Usage

```javascript
const links = document.querySelectorAll('a');
maybeSetLinkTarget(links);
```

## Changelog

### 2.1.0 2023-03-08

-   Add dataset attribute to links which have been modified.

### 2.0.0 2022-05-07

-   Remove jQuery usage, use as ES6 now.

### 1.0.4 2020-03-11

-   Fix jQuery error

### 1.0.3 2020-03-11

-   Add rel=noopener to links set with blank targets

### 1.0.2 2020-03-11

-   Add rel=noopener to links set with blank targets

### 1.0.1 2019-02-15

-   Fix null matching in URL parsing

### 1.0.0 2019-01-18

-   Initial NPM version
