<a name="module_Emoji"></a>
## Emoji
Emoji

**Author:** RaceProUK  
**License**: MIT  

* [Emoji](#module_Emoji)
    * _static_
        * [.prepare(pluginConfig, botConfig, events, browser)](#module_Emoji.prepare)
        * [.start()](#module_Emoji.start)
        * [.stop()](#module_Emoji.stop)
    * _inner_
        * [~handler(message)](#module_Emoji..handler)
        * [~replaceEmoji(post, callback)](#module_Emoji..replaceEmoji)

<a name="module_Emoji.prepare"></a>
### Emoji.prepare(pluginConfig, botConfig, events, browser)
Prepare Plugin prior to login

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pluginConfig | <code>\*</code> | Plugin specific configuration |
| botConfig | <code>SockBot.Config</code> | Overall bot configuration (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/config/) for more details) |
| events | <code>SockBot.SockEvents</code> | EventEmitter used for the bot (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/events/#module_SockEvents) for more details) |
| browser | <code>SockBot.Browser</code> | Web browser for communicating with discourse (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/browser/) for more details) |

<a name="module_Emoji.start"></a>
### Emoji.start()
Start the plugin after login

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  
<a name="module_Emoji.stop"></a>
### Emoji.stop()
Stop the plugin prior to exit or reload

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  
<a name="module_Emoji..handler"></a>
### Emoji~handler(message)
Replace emoji in the user's own posts

**Kind**: inner method of <code>[Emoji](#module_Emoji)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>SockBot.Message</code> | Notification recieved (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/messageBus/#external.module_messageBus..message) for more details) |

<a name="module_Emoji..replaceEmoji"></a>
### Emoji~replaceEmoji(post, callback)
Replace emoji in the user's own post

**Kind**: inner method of <code>[Emoji](#module_Emoji)</code>  

| Param | Type | Description |
| --- | --- | --- |
| post | <code>SockBot.CleanedPost</code> | The post to process (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/messageBus/#external.module_messageBus..message) for more details) |
| callback | <code>SockBot.completedCallback</code> | Completion callback |

