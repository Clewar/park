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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateParkingLotResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateParkingLotArgs_1 = require("./args/AggregateParkingLotArgs");
const ParkingLot_1 = require("../../../models/ParkingLot");
const AggregateParkingLot_1 = require("../../outputs/AggregateParkingLot");
const helpers_1 = require("../../../helpers");
let AggregateParkingLotResolver = class AggregateParkingLotResolver {
    async aggregateParkingLot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
};
__decorate([
    TypeGraphQL.Query((_returns) => AggregateParkingLot_1.AggregateParkingLot, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateParkingLotArgs_1.AggregateParkingLotArgs]),
    __metadata("design:returntype", Promise)
], AggregateParkingLotResolver.prototype, "aggregateParkingLot", null);
AggregateParkingLotResolver = __decorate([
    TypeGraphQL.Resolver((_of) => ParkingLot_1.ParkingLot)
], AggregateParkingLotResolver);
exports.AggregateParkingLotResolver = AggregateParkingLotResolver;
