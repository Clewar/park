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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    ParkingLot: crudResolvers.ParkingLotCrudResolver,
};
const actionResolversMap = {
    ParkingLot: {
        aggregateParkingLot: actionResolvers.AggregateParkingLotResolver,
        createManyParkingLot: actionResolvers.CreateManyParkingLotResolver,
        createOneParkingLot: actionResolvers.CreateOneParkingLotResolver,
        deleteManyParkingLot: actionResolvers.DeleteManyParkingLotResolver,
        deleteOneParkingLot: actionResolvers.DeleteOneParkingLotResolver,
        findFirstParkingLot: actionResolvers.FindFirstParkingLotResolver,
        findFirstParkingLotOrThrow: actionResolvers.FindFirstParkingLotOrThrowResolver,
        parkingLots: actionResolvers.FindManyParkingLotResolver,
        parkingLot: actionResolvers.FindUniqueParkingLotResolver,
        getParkingLot: actionResolvers.FindUniqueParkingLotOrThrowResolver,
        groupByParkingLot: actionResolvers.GroupByParkingLotResolver,
        updateManyParkingLot: actionResolvers.UpdateManyParkingLotResolver,
        updateOneParkingLot: actionResolvers.UpdateOneParkingLotResolver,
        upsertOneParkingLot: actionResolvers.UpsertOneParkingLotResolver,
    },
};
const crudResolversInfo = {
    ParkingLot: [
        "aggregateParkingLot",
        "createManyParkingLot",
        "createOneParkingLot",
        "deleteManyParkingLot",
        "deleteOneParkingLot",
        "findFirstParkingLot",
        "findFirstParkingLotOrThrow",
        "parkingLots",
        "parkingLot",
        "getParkingLot",
        "groupByParkingLot",
        "updateManyParkingLot",
        "updateOneParkingLot",
        "upsertOneParkingLot",
    ],
};
const argsInfo = {
    AggregateParkingLotArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyParkingLotArgs: ["data", "skipDuplicates"],
    CreateOneParkingLotArgs: ["data"],
    DeleteManyParkingLotArgs: ["where"],
    DeleteOneParkingLotArgs: ["where"],
    FindFirstParkingLotArgs: [
        "where",
        "orderBy",
        "cursor",
        "take",
        "skip",
        "distinct",
    ],
    FindFirstParkingLotOrThrowArgs: [
        "where",
        "orderBy",
        "cursor",
        "take",
        "skip",
        "distinct",
    ],
    FindManyParkingLotArgs: [
        "where",
        "orderBy",
        "cursor",
        "take",
        "skip",
        "distinct",
    ],
    FindUniqueParkingLotArgs: ["where"],
    FindUniqueParkingLotOrThrowArgs: ["where"],
    GroupByParkingLotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyParkingLotArgs: ["data", "where"],
    UpdateOneParkingLotArgs: ["data", "where"],
    UpsertOneParkingLotArgs: ["where", "create", "update"],
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    var _a;
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = (_a = resolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...(maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : [])];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : [])];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    ParkingLot: ["id", "name", "spots", "contact", "parkingType"],
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateParkingLot: ["_count", "_avg", "_sum", "_min", "_max"],
    ParkingLotGroupBy: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    AffectedRowsOutput: ["count"],
    ParkingLotCountAggregate: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
        "_all",
    ],
    ParkingLotAvgAggregate: ["spots", "contact"],
    ParkingLotSumAggregate: ["spots", "contact"],
    ParkingLotMinAggregate: ["id", "name", "spots", "contact", "parkingType"],
    ParkingLotMaxAggregate: ["id", "name", "spots", "contact", "parkingType"],
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ParkingLotWhereInput: [
        "AND",
        "OR",
        "NOT",
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotOrderByWithRelationInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotWhereUniqueInput: ["id", "name"],
    ParkingLotOrderByWithAggregationInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
        "_count",
        "_avg",
        "_max",
        "_min",
        "_sum",
    ],
    ParkingLotScalarWhereWithAggregatesInput: [
        "AND",
        "OR",
        "NOT",
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotCreateInput: ["id", "name", "spots", "contact", "parkingType"],
    ParkingLotUpdateInput: ["id", "name", "spots", "contact", "parkingType"],
    ParkingLotCreateManyInput: ["id", "name", "spots", "contact", "parkingType"],
    ParkingLotUpdateManyMutationInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    StringFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
    ],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumParkingLotTypeFilter: ["equals", "in", "notIn", "not"],
    ParkingLotCountOrderByAggregateInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotAvgOrderByAggregateInput: ["spots", "contact"],
    ParkingLotMaxOrderByAggregateInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotMinOrderByAggregateInput: [
        "id",
        "name",
        "spots",
        "contact",
        "parkingType",
    ],
    ParkingLotSumOrderByAggregateInput: ["spots", "contact"],
    StringWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "mode",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    IntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    BigIntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    EnumParkingLotTypeWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    StringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: [
        "set",
        "increment",
        "decrement",
        "multiply",
        "divide",
    ],
    BigIntFieldUpdateOperationsInput: [
        "set",
        "increment",
        "decrement",
        "multiply",
        "divide",
    ],
    EnumParkingLotTypeFieldUpdateOperationsInput: ["set"],
    NestedStringFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
    ],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBigIntFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
    ],
    NestedEnumParkingLotTypeFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "contains",
        "startsWith",
        "endsWith",
        "not",
        "_count",
        "_min",
        "_max",
    ],
    NestedIntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBigIntWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "lt",
        "lte",
        "gt",
        "gte",
        "not",
        "_count",
        "_avg",
        "_sum",
        "_min",
        "_max",
    ],
    NestedEnumParkingLotTypeWithAggregatesFilter: [
        "equals",
        "in",
        "notIn",
        "not",
        "_count",
        "_min",
        "_max",
    ],
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
