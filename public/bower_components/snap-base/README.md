# snap-base
A tiny base stylesheet built on normalize.css. It cleans up typographic and form elements by removing redundant spaces. It also adds `* { box-sizing: border-box }`.

## Installation
There are a few ways to download install snap-base. My recommendation will be to use a package manager like Bower.
* [Bower](http://bower.io/) run: `bower install --save snap-base`

## Usage
Snap base requires normalize.css which is packaged as a dependency using bower. To use snap-base do the following:
```css
@import "components/normalize-css/normalize.css"
@import "components/normalize-css/snap-base/base.css"
```

## Browser Compatibility
Broken in IE < 8.