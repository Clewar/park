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
exports.ParkingLotCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateParkingLotArgs_1 = require("./args/AggregateParkingLotArgs");
const CreateManyParkingLotArgs_1 = require("./args/CreateManyParkingLotArgs");
const CreateOneParkingLotArgs_1 = require("./args/CreateOneParkingLotArgs");
const DeleteManyParkingLotArgs_1 = require("./args/DeleteManyParkingLotArgs");
const DeleteOneParkingLotArgs_1 = require("./args/DeleteOneParkingLotArgs");
const FindFirstParkingLotArgs_1 = require("./args/FindFirstParkingLotArgs");
const FindFirstParkingLotOrThrowArgs_1 = require("./args/FindFirstParkingLotOrThrowArgs");
const FindManyParkingLotArgs_1 = require("./args/FindManyParkingLotArgs");
const FindUniqueParkingLotArgs_1 = require("./args/FindUniqueParkingLotArgs");
const FindUniqueParkingLotOrThrowArgs_1 = require("./args/FindUniqueParkingLotOrThrowArgs");
const GroupByParkingLotArgs_1 = require("./args/GroupByParkingLotArgs");
const UpdateManyParkingLotArgs_1 = require("./args/UpdateManyParkingLotArgs");
const UpdateOneParkingLotArgs_1 = require("./args/UpdateOneParkingLotArgs");
const UpsertOneParkingLotArgs_1 = require("./args/UpsertOneParkingLotArgs");
const helpers_1 = require("../../../helpers");
const ParkingLot_1 = require("../../../models/ParkingLot");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateParkingLot_1 = require("../../outputs/AggregateParkingLot");
const ParkingLotGroupBy_1 = require("../../outputs/ParkingLotGroupBy");
let ParkingLotCrudResolver = class ParkingLotCrudResolver {
    async aggregateParkingLot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstParkingLotOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async parkingLots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async parkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async getParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByParkingLot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).parkingLot.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
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
], ParkingLotCrudResolver.prototype, "aggregateParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyParkingLotArgs_1.CreateManyParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "createManyParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => ParkingLot_1.ParkingLot, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneParkingLotArgs_1.CreateOneParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "createOneParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyParkingLotArgs_1.DeleteManyParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "deleteManyParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneParkingLotArgs_1.DeleteOneParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "deleteOneParkingLot", null);
__decorate([
    TypeGraphQL.Query((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstParkingLotArgs_1.FindFirstParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "findFirstParkingLot", null);
__decorate([
    TypeGraphQL.Query((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstParkingLotOrThrowArgs_1.FindFirstParkingLotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "findFirstParkingLotOrThrow", null);
__decorate([
    TypeGraphQL.Query((_returns) => [ParkingLot_1.ParkingLot], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyParkingLotArgs_1.FindManyParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "parkingLots", null);
__decorate([
    TypeGraphQL.Query((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueParkingLotArgs_1.FindUniqueParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "parkingLot", null);
__decorate([
    TypeGraphQL.Query((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueParkingLotOrThrowArgs_1.FindUniqueParkingLotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "getParkingLot", null);
__decorate([
    TypeGraphQL.Query((_returns) => [ParkingLotGroupBy_1.ParkingLotGroupBy], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByParkingLotArgs_1.GroupByParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "groupByParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyParkingLotArgs_1.UpdateManyParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "updateManyParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => ParkingLot_1.ParkingLot, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneParkingLotArgs_1.UpdateOneParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "updateOneParkingLot", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => ParkingLot_1.ParkingLot, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneParkingLotArgs_1.UpsertOneParkingLotArgs]),
    __metadata("design:returntype", Promise)
], ParkingLotCrudResolver.prototype, "upsertOneParkingLot", null);
ParkingLotCrudResolver = __decorate([
    TypeGraphQL.Resolver((_of) => ParkingLot_1.ParkingLot)
], ParkingLotCrudResolver);
exports.ParkingLotCrudResolver = ParkingLotCrudResolver;
