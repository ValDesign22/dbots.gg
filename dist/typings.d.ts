/**
 * Discord ID
 */
export declare type Snowflake = string;

export interface BotStats {
    /**
     * The amount of servers the bot is in
     */
    guildCount?: number;
    /**
     * The shard ID to post as (only when posting)
     */
    shardId?: number;
    /**
     * The amount of shards a bot has
     */
    shardCount?: number;
}