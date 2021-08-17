"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importStar(require("axios"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const querystring_1 = __importDefault(require("querystring"));
const Discord = __importStar(require("discord.js"));
const events_1 = require("events");

/**
 * discord.bots.gg API Client for Posting stats or Fetching data
 * @example
 * ```js
 * const DBGG = require("dbots.gg")
 *
 * const Api = new DBGG.Api(client, 'Your discord.bots.gg token')
 * ```
 * @link {@link https://valredstone.gitbook.io/dbots-gg | Library docs}
 */

class Api extends events_1.EventEmitter {
    /**
     * Create discord.bots.gg API instance
     * @param {string} token Token or options
     * @param {Discord.Client} client Discord Client or options
     */

    constructor(client, token) {
        super();

        if (!client) throw new Error("Client value is not defined");

        if (!(client instanceof Discord.Client)) throw new Error("Not valid Discord Client");

        if (!token) throw new Error("Missing discord.bots.gg token");

        this.token = token;
        this.client = client;
    }

    /**
     * Post bot stats to Top.gg
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
     * })
     * ```
     */
     async post(stats, log) {
        if (!stats || !stats.guildCount) throw new Error('Missing Guild Count');
        await axios_1
        .post(`https://discord.bots.gg/api/v1/bots/${this.client.user.id}/stats`, {
            guildCount: stats.guildCount,
            shardCount: stats.shardCount,
            shardId: stats.shardId
        }, {
            headers: {
                Authorization: this.token,
                "User-Agent": `${this.client.user.username}-${this.client.user.discriminator}/${require("../../package.json").version} (discord.js;+https://valredstone.gitbook.io/npm-discordbots) DBots/${this.client.user.id}`
            }
        }).catch(err => {
            console.error(err);
        });

        if (log) console.log(`Server count posted on discord.bots.gg for bot: ${this.client.user.tag} (${this.client.user.id})`);
    }

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
     *   ...
     * }
     * ```
     */
    async get(id) {
        if (!id) throw new Error("Missing Bot ID");
        return await axios_1.get(`https://discord.bots.gg/api/v1/bots/${id}`).then(({data}) => data);
    }

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
    async search(results) {
        if (!results || !results.query) throw new Error("Missing Query Search");
        return await axios_1.get(`https://discord.bots.gg/api/v1/bots`, 
        {
            q: results.query,
            limit: results.count,
            page: results.page
        })
        .then(({data}) => data)
    }
}

exports.Api = Api;
exports.version = require("../../package.json").version;