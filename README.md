# Discord.Bots.Gg Unofficial NPM Package

[![downloadsBadge](https://img.shields.io/npm/dt/dbots.gg?style=for-the-badge)](https://npmjs.com/dbots.gg)
[![versionBadge](https://img.shields.io/npm/v/gbots.gg?style=for-the-badge)](https://npmjs.com/dbots.gg)

# Installation
```shell
npm i dbots.gg
```

# Introduction
The base client is discord.bot.gg Api, and it takes your discord.<span>bots.<span>gg token and provides you with plenty of methods to interact with the API.

Your discord.<span>bots.<span>gg token can be found at `https://discord.bots.gg/docs` and copying the token.

# Links

[Documentation](https://valredstone.gitbook.io/npm-discordbots)
[API Reference](https://discord.bots.gg/docs) | [GitHub](https://github.com/ValRedstone/dbots.gg) | [NPM](https://npmjs.com/package/dbots.gg)

# Examples
## Posting stats:

```js
const Discord = require("discord.js");
const DBGG = require("dbots.gg");

const client = new Discord.Client();
const Api = new DBGG.Api(client, 'Your discord.bots.gg token');

client.on("ready", async () => {
    await Api.post({
    guildCount: client.guilds.cache.size,
    shardCount: 1
    })
})

client.login("Your discord bot token");
```

With this code your bot guilds and shards count will be posted on discord.<spam>bots.<span>gg