Rect Utility
============

Usage
-----

### CommonJS

~~~ js
const {getOffset} = require('@taufik-nurrohman/rect');

console.log(getOffset(document.querySelector('#pane')));
~~~

### ECMAScript

~~~ js
import {isString} from '@taufik-nurrohman/rect';

console.log(getOffset(document.querySelector('#pane')));
~~~

Methods
-------

### getAxis(event: MouseEvent|TouchEvent, ?node: Element)

### getOffset(node: Element)

### getRect(node: Element|Window)

### getSize(node: Element|Window)

### getScroll(node: Element|Window)
