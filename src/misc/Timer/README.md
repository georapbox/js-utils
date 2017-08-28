<a name="Timer"></a>

## Timer

Simple class to create and manage timers.

**NOTE:** Depends on `window.requestAnimationFrame`. If your environment does not support it, you can [polyfill](https://github.com/darius/requestAnimationFrame).

* [Timer](#Timer)
    * [new Timer([duration], [callback])](#new_Timer_new)
    * [.time()](#Timer+time) ⇒ <code>Object</code>
    * [.start(shouldReset)](#Timer+start) ⇒ <code>[Timer](#Timer)</code>
    * [.stop()](#Timer+stop) ⇒ <code>[Timer](#Timer)</code>
    * [.reset(shouldStop)](#Timer+reset) ⇒ <code>[Timer](#Timer)</code>

<a name="new_Timer_new"></a>

### new Timer([duration], [callback])
Creates a Timer instance.


| Param | Type | Description |
| --- | --- | --- |
| [duration] | <code>Number</code> | The timer's duration (ms). If left undefined or 0 the timer counts up instead of down. |
| [callback] | <code>function</code> | Function to be executed while timer is running. The Timer instance is passed by as parameter. |

<a name="Timer+time"></a>

### timer.time() ⇒ <code>Object</code>
Get the remaining and elapsed time.
If no duration is specified during initialization, the remaining time will always be 0.

**Kind**: instance method of <code>[Timer](#Timer)</code>  
**Returns**: <code>Object</code> - An object that contains the remaining and the elapsed time in milliseconds.  
**this**: <code>{Timer}</code>  
<a name="Timer+start"></a>

### timer.start(shouldReset) ⇒ <code>[Timer](#Timer)</code>
Start the timer.
If the timer instance has been already started, the timer will just resume.

**Kind**: instance method of <code>[Timer](#Timer)</code>  
**Returns**: <code>[Timer](#Timer)</code> - The Timer instance.  
**this**: <code>{Timer}</code>  

| Param | Type | Description |
| --- | --- | --- |
| shouldReset | <code>Boolean</code> | If set to true, the timer will reset to initial specified duration. |

<a name="Timer+stop"></a>

### timer.stop() ⇒ <code>[Timer](#Timer)</code>
Stop/Pause the timer.

**Kind**: instance method of <code>[Timer](#Timer)</code>  
**Returns**: <code>[Timer](#Timer)</code> - The Timer instance.  
**this**: <code>{Timer}</code>  
<a name="Timer+reset"></a>

### timer.reset(shouldStop) ⇒ <code>[Timer](#Timer)</code>
Resets the timer to initial specified duration.

**Kind**: instance method of <code>[Timer](#Timer)</code>  
**Returns**: <code>[Timer](#Timer)</code> - The Timer instance.  
**this**: <code>{Timer}</code>  

| Param | Type | Description |
| --- | --- | --- |
| shouldStop | <code>Boolean</code> | If set to true, the timer will be forced to stop; otherwise will reset and continue running. |
