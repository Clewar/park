import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (
  decorators: MethodDecorator[]
) => MethodDecorator[];

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
    findFirstParkingLotOrThrow:
      actionResolvers.FindFirstParkingLotOrThrowResolver,
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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof (typeof crudResolversMap)[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<
    ModelResolverActionNames<TModel>,
    MethodDecorator[] | MethodDecoratorOverrideFn
  >
> & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName =
      resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames =
      crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      const actionTarget = (
        actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function
      ).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof (typeof argsTypes)[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<
  ArgFieldNames<TArgsType>
>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName =
      argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo]
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (
  decorators: PropertyDecorator[]
) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName] as
        | PropertyDecorator[]
        | PropertyDecoratorOverrideFn
        | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  ParkingLot: ["id", "name", "spots", "contact", "parkingType"],
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof (typeof models)[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo]
    );
  }
}

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

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof (typeof outputTypes)[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName =
      outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo]
    );
  }
}

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

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof (typeof inputTypes)[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName =
      inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo]
    );
  }
}
