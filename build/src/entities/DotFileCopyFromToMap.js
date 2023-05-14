"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotFileCopyFromToMap = void 0;
var typeorm_1 = require("typeorm");
var DotFileCopyFromToMap = /** @class */ (function () {
    function DotFileCopyFromToMap() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], DotFileCopyFromToMap.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], DotFileCopyFromToMap.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], DotFileCopyFromToMap.prototype, "fromPath", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], DotFileCopyFromToMap.prototype, "toPath", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], DotFileCopyFromToMap.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], DotFileCopyFromToMap.prototype, "updatedAt", void 0);
    DotFileCopyFromToMap = __decorate([
        (0, typeorm_1.Entity)()
    ], DotFileCopyFromToMap);
    return DotFileCopyFromToMap;
}());
exports.DotFileCopyFromToMap = DotFileCopyFromToMap;
