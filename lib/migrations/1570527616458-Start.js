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
Object.defineProperty(exports, "__esModule", { value: true });
var Start1570527616458 = /** @class */ (function () {
    function Start1570527616458() {
    }
    Start1570527616458.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"vendor\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"UQ_f61018bdc439c6d1a941261b671\" UNIQUE (\"name\"), CONSTRAINT \"PK_931a23f6231a57604f5a0e32780\" PRIMARY KEY (\"id\"))", undefined)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"image\" (\"id\" SERIAL NOT NULL, \"vid\" character varying NOT NULL, \"vendorId\" integer, CONSTRAINT \"UQ_5ed10fd6122688945554c23b093\" UNIQUE (\"vid\"), CONSTRAINT \"PK_d6db1ab4ee9ad9dbe86c64e4cc3\" PRIMARY KEY (\"id\"))", undefined)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"image\" ADD CONSTRAINT \"FK_3a8a1ed0ec3e3c176c5225456eb\" FOREIGN KEY (\"vendorId\") REFERENCES \"vendor\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION", undefined)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Start1570527616458.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"image\" DROP CONSTRAINT \"FK_3a8a1ed0ec3e3c176c5225456eb\"", undefined)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"image\"", undefined)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"vendor\"", undefined)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Start1570527616458;
}());
exports.Start1570527616458 = Start1570527616458;
