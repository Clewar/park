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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_2 = require("graphql-http/lib/use/express");
const client_1 = require("@prisma/client");
const type_graphql_1 = require("./prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
const TypeGraphQL = __importStar(require("type-graphql"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("./prisma/generated/type-graphql/helpers");
const checkInArgs_1 = require("./graphQL/custom-classes/checkInArgs");
// Create an express server and a GraphQL endpoint
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
let CustomParkingLotResolver = class CustomParkingLotResolver {
    async parkingLotCheckIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        let response = 'Check in failed';
        const today = new Date();
        const parkingLot = await ctx.prisma.parkingLot.findFirst({
            where: {
                id: args.data.parkingLotId
            }
        });
        if (!parkingLot) {
            throw new Error('Parking lot not found');
        }
        switch (parkingLot.parkingType) {
            case 'public':
                response = 'Check in successful';
                break;
            case 'private':
                if (args.data.userType === 'corporate') {
                    if (today.getDay() === 0 || today.getDay() === 6) {
                        response = 'You cannot check in on a weekend';
                    }
                    else {
                        response = 'Check in successful';
                    }
                }
                break;
            case 'courtesy':
                if (args.data.userType === 'visitor') {
                    // Check if it is a weekend
                    if (today.getDay() === 0 || today.getDay() === 6) {
                        response = 'Check in successful';
                    }
                }
        }
        return response;
    }
    async createOneCorrectParkingLot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        // Only allow parking lots with more than 50 spots and less than 1500 spots
        if (args.data.spots < 50 || args.data.spots > 1500) {
            throw new Error('Parking lots must have at least 50 spots and no more than 1500 spots');
        }
        // Parking lot name should not be already taken
        const parkingLot = await ctx.prisma.parkingLot.findFirst({
            where: {
                name: args.data.name
            }
        });
        if (parkingLot) {
            throw new Error('Parking lot name already taken');
        }
        return ctx.prisma.parkingLot.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
__decorate([
    (0, type_graphql_2.Query)(_returns => String, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, checkInArgs_1.CheckInArgs]),
    __metadata("design:returntype", Promise)
], CustomParkingLotResolver.prototype, "parkingLotCheckIn", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_1.ParkingLot, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_1.CreateOneParkingLotArgs]),
    __metadata("design:returntype", Promise)
], CustomParkingLotResolver.prototype, "createOneCorrectParkingLot", null);
CustomParkingLotResolver = __decorate([
    (0, type_graphql_2.Resolver)(of => type_graphql_1.ParkingLot)
], CustomParkingLotResolver);
exports.schema = (0, type_graphql_2.buildSchemaSync)({
    resolvers: [CustomParkingLotResolver, ...type_graphql_1.resolvers],
    emitSchemaFile: path_1.default.resolve(__dirname, "./generated-schema.graphql"),
    validate: false
});
app.use('/graphql', (0, express_2.createHandler)({
    schema: exports.schema,
    context: () => ({ prisma })
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
