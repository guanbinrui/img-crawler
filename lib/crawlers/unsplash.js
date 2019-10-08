"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var crawler_1 = __importDefault(require("crawler"));
var Image_1 = require("../entities/Image");
var configs_1 = require("../configs");
var Vendor_1 = require("../entities/Vendor");
var handleCrawlerError_1 = require("../helpers/handleCrawlerError");
exports.default = new crawler_1.default({
    maxConnections: 10,
    callback: function (err, _a, done) {
        var body = _a.body, options = _a.options;
        return __awaiter(this, void 0, void 0, function () {
            var $, ids, _i, ids_1, id, image, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (err) {
                            handleCrawlerError_1.handleCrawlerError(err, options);
                        }
                        $ = cheerio_1.default.load(body);
                        ids = $('img')
                            .toArray()
                            .map(function (n) { return n.attribs.srcset; })
                            .filter(function (url) { return /photo\-/.test(url); })
                            .map(function (url) {
                            var result = url.match(/photo\-(\d+\-[\d\w]{12})/);
                            return result ? result[1] : '';
                        })
                            .filter(function (id) { return Boolean(id); });
                        _i = 0, ids_1 = ids;
                        _c.label = 1;
                    case 1:
                        if (!(_i < ids_1.length)) return [3 /*break*/, 6];
                        id = ids_1[_i];
                        return [4 /*yield*/, Image_1.Image.findOne({ vid: id })];
                    case 2:
                        image = (_c.sent()) || new Image_1.Image();
                        if (!!image.vid) return [3 /*break*/, 5];
                        image.vid = id;
                        _b = image;
                        return [4 /*yield*/, Vendor_1.Vendor.findOne({ name: configs_1.VendorType.UNSPLASH })];
                    case 3:
                        _b.vendor = _c.sent();
                        return [4 /*yield*/, Image_1.Image.save(image)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        done();
                        return [2 /*return*/];
                }
            });
        });
    },
});
