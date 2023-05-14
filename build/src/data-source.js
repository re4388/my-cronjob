"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var DotFileCopyFromToMap_1 = require("./entities/DotFileCopyFromToMap");
var config_1 = __importDefault(require("config"));
var port = config_1.default.get('pg.connect.port');
var host = config_1.default.get('pg.connect.host');
var database = config_1.default.get('pg.connect.database');
var username = config_1.default.get('pg.auth.username');
var password = config_1.default.get('pg.auth.password');
var synchronize = config_1.default.get('pg.setting.synchronize');
var logging = config_1.default.get('pg.setting.logging');
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: synchronize,
    logging: logging,
    entities: [DotFileCopyFromToMap_1.DotFileCopyFromToMap],
    subscribers: [],
    migrations: ['src/migration'],
});
