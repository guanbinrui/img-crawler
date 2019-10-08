"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleCrawlerError(err, options) {
    if (err && options.uri) {
        console.log("Network error when request: " + options.uri);
        console.log(err);
    }
    return process.exit(1);
}
exports.handleCrawlerError = handleCrawlerError;
