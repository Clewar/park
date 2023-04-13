"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const ParkingLotAvgAggregate_1 = require("../outputs/ParkingLotAvgAggregate");
const ParkingLotCountAggregate_1 = require("../outputs/ParkingLotCountAggregate");
const ParkingLotMaxAggregate_1 = require("../outputs/ParkingLotMaxAggregate");
const ParkingLotMinAggregate_1 = require("../outputs/ParkingLotMinAggregate");
const ParkingLotSumAggregate_1 = require("../outputs/ParkingLotSumAggregate");
const ParkingLotType_1 = require("../../enums/ParkingLotType");
let ParkingLotGroupBy = class ParkingLotGroupBy {
};
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ParkingLotGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ParkingLotGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ParkingLotGroupBy.prototype, "spots", void 0);
__decorate([
    TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
        nullable: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ParkingLotGroupBy.prototype, "contact", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotType_1.ParkingLotType, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ParkingLotGroupBy.prototype, "parkingType", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotCountAggregate_1.ParkingLotCountAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], ParkingLotGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotAvgAggregate_1.ParkingLotAvgAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], ParkingLotGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotSumAggregate_1.ParkingLotSumAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], ParkingLotGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotMinAggregate_1.ParkingLotMinAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], ParkingLotGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field((_type) => ParkingLotMaxAggregate_1.ParkingLotMaxAggregate, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], ParkingLotGroupBy.prototype, "_max", void 0);
ParkingLotGroupBy = __decorate([
    TypeGraphQL.ObjectType("ParkingLotGroupBy", {
        isAbstract: true,
    })
], ParkingLotGroupBy);
exports.ParkingLotGroupBy = ParkingLotGroupBy;
