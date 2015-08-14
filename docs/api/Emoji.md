<a name="module_Emoji"></a>
## Emoji
Emoji

**Author:** RaceProUK  
**License**: MIT  

* [Emoji](#module_Emoji)
  * [.prepare(plugConfig, config, events, browser)](#module_Emoji.prepare)
  * [.start()](#module_Emoji.start)
  * [.stop()](#module_Emoji.stop)
  * [.handler(notification, topic, post)](#module_Emoji.handler)

<a name="module_Emoji.prepare"></a>
### Emoji.prepare(plugConfig, config, events, browser)
Prepare Plugin prior to login

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  

| Param | Type | Description |
| --- | --- | --- |
| plugConfig | <code>\*</code> | Plugin specific configuration |
| config | <code>Config</code> | Overall bot configuration |
| events | <code>externals.events.SockEvents</code> | EventEmitter used for the bot |
| browser | <code>Browser</code> | Web browser for communicating with discourse |

<a name="module_Emoji.start"></a>
### Emoji.start()
Start the plugin after login

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  
<a name="module_Emoji.stop"></a>
### Emoji.stop()
Stop the plugin prior to exit or reload

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  
<a name="module_Emoji.handler"></a>
### Emoji.handler(notification, topic, post)
Handle notifications

**Kind**: static method of <code>[Emoji](#module_Emoji)</code>  

| Param | Type | Description |
| --- | --- | --- |
| notification | <code>external.notifications.Notification</code> | Notification recieved |
| topic | <code>external.topics.Topic</code> | Topic trigger post belongs to |
| post | <code>external.posts.CleanedPost</code> | Post that triggered notification |

