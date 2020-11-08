<a name="module_scroll"></a>

## scroll
Easing based scrolling to a specified y point inside page.

<a name="module_scroll..to"></a>

### scroll~to([options], [callback])
Scrolls page to the y point with the specified duration and easing function.

**Kind**: inner method of <code>[scroll](#module_scroll)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | User defined options, extending the default ones. |
| [options.y] | <code>Number</code> | <code>0</code> | The point the scroll ends. |
| [options.duration] | <code>Number</code> | <code>400</code> | The duration (milliseconds) of the scrolling animation. |
| [options.easing] | <code>function</code> | <code>scroll.easing.linear</code> | The animation's easing function.        <br>Available easing methods:        <ul>        <li>scroll.easing.linear</li>        <li>scroll.easing.easeInQuad</li>        <li>scroll.easing.easeOutQuad</li>        <li>scroll.easing.easeInOutQuad</li>        <li>scroll.easing.easeInCubic</li>        <li>scroll.easing.easeOutCubic</li>        <li>scroll.easing.easeInOutCubic</li>        <li>scroll.easing.easeInQuart</li>        <li>scroll.easing.easeOutQuart</li>        <li>scroll.easing.easeInOutQuart</li>        <li>scroll.easing.easeInQuint</li>        <li>scroll.easing.easeOutQuint</li>        <li>scroll.easing.easeInOutQuint</li>        </ul> |
| [callback] | <code>function</code> |  | A callback function to be executed after animation is done. |

**Example**  
```js
// Scroll page 500px from top
scroll.to({
  y: 500,
  duration: 800,
  easing: scroll.easing.easeInOutCubic
}, function () {
  console.log('Finished scrolling.');
});

// Scroll page to an element
scroll.to({
  y: document.getElementById('test').getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop),
  duration: 600,
  easing: scroll.easing.easeInOutCubic
}, function (y) {
  console.log('Scrolled down ' + y + ' pixels.');
});
```
