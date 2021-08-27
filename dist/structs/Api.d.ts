/// <reference types="node" />

import { EventEmitter } from 'events';
import { Client } from 'discord.js';
import { Snowflake, BotStats } from '../typings';

/**
 * discord.bots.gg API Client for Posting stats or Fetching data
 * @example
 * ```js
 * const DBGG = require("dbots.gg")
 *
 * const Api = new DBGG.Api(client, 'Your discord.bots.gg token')
 * ```
 * @link {@link https://valredstone.gitbook.io/npm-discordbots | Library docs}
 * @link {@link https://discord.bots.gg/docs | API Documenation}
 */

export declare class Api extends EventEmitter {
    private options;
    /**
     * Create discord.bots.gg API instance
     * @param {string} token Token or options
     * @param {Client} client Discord Client or options
     */

    constructor(client: Client, token: string);

    /**
     * Post bot stats to discord.bots.gg
     * @param {Object} stats Stats object
     * @param {number} stats.guildCount Guild count
     * @param {number?} stats.shardCount Shard count
     * @param {number?} stats.shardId Posting shard (useful for process sharding)
     * @param {boolean?} log Log a message in console when stats are posted
     * @returns {BotStats} Passed object
     * @example
     * ```js
     * await Api.post({
     *   guildCount: 25162,
     *   shardCount: 1
     * }, true);
     * 
     * // =>
     * `Server count posted on discord.bots.gg for bot: USER#0000 (123456789123456789)`
     * ```
     */

    post(stats: BotStats, log: Boolean): Promise<BotStats>;

    /**
     * 
     * @param {Snowflake} id Bot Id
     * @returns {BotStats} Stats of bot requested
     * @example
     * ```js
     * await Api.get("123456789123456789");
     * // =>
     * {
     *   guildCount: 25162,
     *   shardCount: 1,
     *   //and other data
     * }
     * ```
     */
    get(id: BotStats): Promise<BotStats>;

    /**
     * 
     * @param {Object} results Stats object
     * @param {string} results.query Searches for bots that contain the query in their username or short description.
     * @param {integer?} results.count The number of results to retrieve. Must be between 1 and 100.
     * @param {integer?} results.page The page to look at.
     * @returns {BotStats} Stats of bot requested
     * @example
     * ```js
     * await Api.search("Data", 50, 0);
     * // =>
     * {
     *     "count": 1000, // total number of matching bots
     *     "limit": 50, // the max number of bots to retrieve
     *     "page": 0, // the current page
     *     "bots": [
     *         // Uses the Bot structure
     *         { Bot }, { Bot }, { Bot }, etc...
     *     ]
     * }
     */
    search(results: BotStats): Promise<BotStats>;
}
export {};