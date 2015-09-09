'use strict';
/**
 * Emoji
 * @module Emoji
 * @author RaceProUK
 * @license MIT
 */

const mapping = require('./Emoji.json');

const internals = {
    browser: null
};

const privateFns = {
    handler: handler,
    replaceEmoji: replaceEmoji
};

/**
 * Prepare Plugin prior to login
 *
 * @param {*} pluginConfig Plugin specific configuration
 * @param {SockBot.Config} botConfig Overall bot configuration
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/config/) for more details)
 * @param {SockBot.SockEvents} events EventEmitter used for the bot
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/events/#module_SockEvents) for more details)
 * @param {SockBot.Browser} browser Web browser for communicating with discourse
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/browser/) for more details)
 */
exports.prepare = function (pluginConfig, botConfig, events, browser) {
    internals.browser = browser;
    events.onChannel('/latest', handler);
};

/**
 * Start the plugin after login
 */
exports.start = function () {};

/**
 * Stop the plugin prior to exit or reload
 */
exports.stop = function () {};

/**
 * Replace emoji in the user's own posts
 *
 * @param {SockBot.Message} message Notification recieved
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/messageBus/#external.module_messageBus..message)
 * for more details)
 */
function handler(message) {
    internals.browser.getLastPosts(message.topic_id, replaceEmoji, () => 0);
};

/**
 * Replace emoji in the user's own post
 *
 * @param {SockBot.CleanedPost} post The post to process
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/messageBus/#external.module_messageBus..message)
 * for more details)
 * @param {SockBot.completedCallback} callback Completion callback
 */
function replaceEmoji(post, callback) {
    if (!post.yours) {
        callback();
    } else {
        let edited = post.raw;
        for (let emoji in mapping) { //eslint-disable-line prefer-const
            edited = edited.replace(emoji, mapping[emoji]);
        }
        if (edited === post.raw)  {
            callback();
        } else {
            internals.browser.editPost(post.id, edited, null, callback);
        }
    }
};

/* istanbul ignore else */
if (typeof GLOBAL.describe === 'function') {
    //test is running
    exports.internals = internals;
    exports.privateFns = privateFns;
}
