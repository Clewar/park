import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumParkingLotTypeFilter } from "../inputs/NestedEnumParkingLotTypeFilter";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.InputType("EnumParkingLotTypeFilter", {
  isAbstract: true,
})
export class EnumParkingLotTypeFilter {
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

  @TypeGraphQL.Field((_type) => NestedEnumParkingLotTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumParkingLotTypeFilter | undefined;
}
