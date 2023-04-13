import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumParkingLotTypeFilter } from "../inputs/NestedEnumParkingLotTypeFilter";
import { NestedEnumParkingLotTypeWithAggregatesFilter } from "../inputs/NestedEnumParkingLotTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.InputType("EnumParkingLotTypeWithAggregatesFilter", {
  isAbstract: true,
})
export class EnumParkingLotTypeWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => ParkingLotType, {
    nullable: true,
  })
  equals?: "public" | "private" | "courtesy" | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotType], {
    nullable: true,
  })
  in?: Array<"public" | "private" | "courtesy"> | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotType], {
    nullable: true,
  })
  notIn?: Array<"public" | "private" | "courtesy"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumParkingLotTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumParkingLotTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumParkingLotTypeFilter, {
    nullable: true,
  })
  _min?: NestedEnumParkingLotTypeFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumParkingLotTypeFilter, {
    nullable: true,
  })
  _max?: NestedEnumParkingLotTypeFilter | undefined;
}
