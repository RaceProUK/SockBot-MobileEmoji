#SockBot Emoji

Emoji plugin for [SockBot](https://sockbot.rtfd.org/en/latest/) version 2.11.0 or later; automatically replaces Unicode emoji with Discourse emoji in a user's posts.

##Usage

No special syntax is required; simply post as normal.

##Developers

SockBot Emoji is developed by [SockDrawer](https://github.com/SockDrawer) developer [RaceProUK](https://github.com/RaceProUK).

##Quickstart Guide

* Create a folder to install to
* Run `npm install sockbot`
* Run `npm install sockbot-emoji`
* Create a configuration file called `Config.yml` in that folder with the following contents:
```
---
core:
  username: [the bot's username]
  password: [the bot's password]
  owner: [your username]
plugins:
  sockbot-emoji: true
```
* Run `sockbot Config.yml`