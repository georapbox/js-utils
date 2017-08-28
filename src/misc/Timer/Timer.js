/**
 * @category Misc
 */
(function (name, context, definition) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else {
    context[name] = definition(name, context);
  }
}('Timer', this, function () {
  'use strict';

  function now() {
    return window.performance
      ? window.performance.now()
      : Date.now ? Date.now() : new Date().getTime();
  }

  function tick(instance) {
    if (instance._started === false) {
      return;
    }
    instance._time = instance._time + now() - instance._now;
    instance.stop().start();
    instance._callback && instance._callback(instance);
  }

  /**
   * Creates a Timer instance.
   *
   * @constructor Timer
   * @param {Number} [duration] The timer's duration (ms). If left undefined or 0 the timer counts up instead of down.
   * @param {Function} [callback] Function to be executed while timer is running. The Timer instance is passed by as parameter.
   */
  function Timer(duration, callback) {
    this._started = false;
    this._now = 0;
    this._time = 0;
    this._duration = duration;
    this._callback = callback;

    if (typeof duration === 'function') {
      this._duration = 0;
      this._callback = duration;
    }
  }

  /**
   * Get the remaining and elapsed time.
   * If no duration is specified during initialization, the remaining time will always be 0.
   *
   * @memberof Timer
   * @this {Timer}
   * @return {Object} An object that contains the remaining and the elapsed time in milliseconds.
   */
  Timer.prototype.time = function () {
    return {
      remaining: Math.max(0, this._duration - this._time),
      elapsed: this._time
    };
  };

  /**
   * Start the timer.
   * If the timer instance has been already started, the timer will just resume.
   *
   * @memberof Timer
   * @this {Timer}
   * @param {Boolean} shouldReset If set to true, the timer will reset to initial specified duration.
   * @return {Timer} The Timer instance.
   */
  Timer.prototype.start = function (shouldReset) {
    if (shouldReset) {
      this.reset(true);
    }
    if (this._started || Number(this._duration) && this._time > this._duration) {
      return this;
    }
    this._started = true;
    this._now = now();
    window.requestAnimationFrame(tick.bind(this, this));
    return this;
  };

  /**
   * Stop/Pause the timer.
   *
   * @memberof Timer
   * @this {Timer}
   * @return {Timer} The Timer instance.
   */
  Timer.prototype.stop = function () {
    this._started = false;
    return this;
  };

  /**
   * Resets the timer to initial specified duration.
   *
   * @memberof Timer
   * @this {Timer}
   * @param {Boolean} shouldStop If set to true, the timer will be forced to stop; otherwise will reset and continue running.
   * @return {Timer} The Timer instance.
   */
  Timer.prototype.reset = function (shouldStop) {
    if (shouldStop) {
      this.stop();
    }
    this._time = 0;
    return this;
  };

  return Timer;
}));
