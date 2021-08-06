/// <reference types="node" />

import { EventEmitter } from 'events';
import { Snowflake, BotStats } from '../typings';

interface APIOptions {
  /**
   * discord.bots.gg Token
   */
  token?: string;
}

/**
 * discord.bots.gg API Client for Posting stats or Fetching data
 * @example
 * ```js
 * const DBGG = require("dbots.gg")
 *
 * const Api = new DBGG.Api(client, 'Your discord.bots.gg token')
 * ```
 * @link {@link https://valredstone.gitbook.io/npm-discordbots | Library docs}
 */

export declare class Api extends EventEmitter {
    private options;
    /**
     * Create discord.bots.gg API instance
     * @param {string} token Token or options
     * @param {string} client Discord Client or options
     * @param {object?} options API Options
     */

    constructor(client: string, token: string, options?: APIOptions);

    /**
     * Post bot stats to discord.bots.gg
     * @param {Object} stats Stats object
     * @param {number} stats.guildCount Guild count
     * @param {number?} stats.shardCount Shard count
     * @param {number?} stats.shardId Posting shard (useful for process sharding)
     * @returns {BotStats} Passed object
     * @example
     * ```js
     * await Api.post({
     *   guildCount: 25162,
     *   shardCount: 1
     * })
     * ```
     */

    post(stats: BotStats): Promise<BotStats>;

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
     *   shardCount 1
     * }
     * ```
     */
    get(id: BotStats): Promise<BotStats>;
}
export {};