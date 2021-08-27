"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tips = {
    401: 'You need a token for this endpoint',
    403: 'You don\'t have access to this endpoint',
    404: 'Page not found'
};
/**
 * API Error
 */
class DbGGAPIError extends Error {
    constructor(code, text, response) {
        super(`${code} ${text}${tips[code] ? ` (${tips[code]})` : ''}`);
        this.name = 'Discord.Bots.GG API Error';
        this.response = response;
    }
}
exports.default = DbGGAPIError;