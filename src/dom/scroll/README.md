### [DOM](../) > scroll

```js
scroll.to([options] [, callback])
```

Easing based scrolling to a specified y point inside page.

#### Arguments

- [options] _(object)_: Optional. A user defined options object.
    - `[options.y]` _(number)_: The "y" point (in pixels) to scroll to inside page. Default is `0`.
    - `[options.duration]` _(number)_: The duration (in milliseconds) the scroll takes to complete. Default is `400`.
    - `[options.easing]` _(function)_: The easing method of the scrolling animation. Default is `scroll.easing.linear`.

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


- `[callback]` _(function)_: Optional A callback function to be executed after scroll is completed.

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
