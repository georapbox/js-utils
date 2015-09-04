### [DOM](../) > scroll

```js
scroll.to([options] [, callback])
```

> Easing based scrolling to a specified y point inside page.

- <code>[options] {object}</code>

    A user defined options object.

    - <code>[options.y] {number}</code>

    The "y" point (in pixels) to scroll to inside page. Default is ```0```.

    - <code>[options.duration] {number}</code>

    The duration (in milliseconds) the scroll takes to complete. Default is ```400```.

    - <code>[options.easing] {function}</code>

    The easing method of the scrolling animation. Default is ```scroll.easing.linear```.

    Available easing methods:
    - linear
    - easeInQuad
    - easeOutQuad
    - easeInOutQuad
    - easeInCubic
    - easeOutCubic
    - easeInOutCubic
    - easeInQuart
    - easeOutQuart
    - easeInOutQuart
    - easeInQuint
    - easeOutQuint
    - easeInOutQuint


- <code>[callback] {function}</code>

A callback function to be executed after scroll is completed.

### Examples

#### Example 1 - Scroll page 500px from top.
```js
scroll.to({
    y: 500,
    duration: 800,
    easing: scroll.easing.easeInOutCubic
}, function () {
    console.log('Finished scrolling.');
});
```

#### Example 2 - Scroll page to an element.
```js
scroll.to({
    y: document.getElementById('test').getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop),
    duration: 600,
    easing: scroll.easing.easeInOutCubic
}, function (y) {
    console.log('Scrolled down ' + y + ' pixels.');
});
```
