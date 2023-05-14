"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var winston_1 = require("winston");
var chalk_1 = __importDefault(require("chalk"));
var Logger = /** @class */ (function () {
    function Logger() {
        var _this = this;
        this.logFormat = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.colorize(), winston_1.format.printf(function (info) {
            var timestamp = info.timestamp, level = info.level, message = info.message, meta = __rest(info, ["timestamp", "level", "message"]);
            var ts = timestamp.slice(0, 19).replace('T', ' ');
            var levelColorized = _this.colorizeLevel(level);
            var metaString = meta && Object.keys(meta).length ? " ".concat(JSON.stringify(meta)) : '';
            return "".concat(ts, " [").concat(levelColorized, "] ").concat(message).concat(metaString);
        }));
        this.logger = this.createLogger();
    }
    Logger.prototype.getLogger = function () {
        if (this.logger) {
            return this.logger;
        }
        else {
            return this.createLogger();
        }
    };
    Logger.prototype.createLogger = function () {
        return (0, winston_1.createLogger)({
            level: 'debug',
            format: this.logFormat,
            transports: [new winston_1.transports.Console()],
        });
    };
    Logger.prototype.colorizeLevel = function (level) {
        switch (level) {
            case 'error':
                return chalk_1.default.red(level);
            case 'warn':
                return chalk_1.default.yellow(level);
            case 'info':
                return chalk_1.default.cyan(level);
            case 'verbose':
                return chalk_1.default.blue(level);
            case 'debug':
                return chalk_1.default.magenta(level);
            case 'silly':
                return chalk_1.default.gray(level);
            default:
                return level;
        }
    };
    Logger.prototype.error = function (message, meta) {
        this.logger.error(message, meta);
    };
    Logger.prototype.warn = function (message, meta) {
        this.logger.warn(message, meta);
    };
    Logger.prototype.info = function (message, meta) {
        this.logger.info(message, meta);
    };
    Logger.prototype.verbose = function (message, meta) {
        this.logger.verbose(message, meta);
    };
    Logger.prototype.debug = function (message, meta) {
        this.logger.debug(message, meta);
    };
    Logger.prototype.silly = function (message, meta) {
        this.logger.silly(message, meta);
    };
    return Logger;
}());
exports.Logger = Logger;
