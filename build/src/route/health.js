"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("../logger");
var getHealth_1 = __importDefault(require("../controllers/health/getHealth"));
var health = express_1.default.Router();
var log = new logger_1.Logger().getLogger();
// middleware that is specific to this router
function infoLog(req, res, next) {
    log.info('this is healthy route');
    next();
}
health.use(infoLog);
health.get('/health', getHealth_1.default);
exports.default = health;
