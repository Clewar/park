import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.InputType("NestedEnumParkingLotTypeFilter", {
  isAbstract: true,
})
export class NestedEnumParkingLotTypeFilter {
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
