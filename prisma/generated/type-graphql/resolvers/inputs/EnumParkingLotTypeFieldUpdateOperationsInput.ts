import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.InputType("EnumParkingLotTypeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class EnumParkingLotTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => ParkingLotType, {
    nullable: true,
  })
  set?: "public" | "private" | "courtesy" | undefined;
}
