"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("../logger");
var copyDotFile_1 = __importDefault(require("../controllers/backupOps/copyDotFile"));
var getVSCodeExt_1 = __importDefault(require("../controllers/backupOps/getVSCodeExt"));
var backupOp = express_1.default.Router();
var log = new logger_1.Logger().getLogger();
function infoLog(req, res, next) {
    log.info('this is middle ware for backupOp route ');
    next();
}
backupOp.use(infoLog);
backupOp.post('/backupOp/getVsCodeExt', getVSCodeExt_1.default);
backupOp.post('/backupOp/copyDotFile', copyDotFile_1.default);
exports.default = backupOp;
