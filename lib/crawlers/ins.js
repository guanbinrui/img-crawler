"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crawler_1 = __importDefault(require("crawler"));
exports.default = new crawler_1.default({
    maxConnections: 10,
    callback: function (e, res, done) {
        console.log(res.body);
        done();
    },
});
