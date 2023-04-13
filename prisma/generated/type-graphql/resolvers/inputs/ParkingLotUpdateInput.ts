import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { EnumParkingLotTypeFieldUpdateOperationsInput } from "../inputs/EnumParkingLotTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ParkingLotUpdateInput", {
  isAbstract: true,
})
export class ParkingLotUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  spots?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BigIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  contact?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => EnumParkingLotTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  parkingType?: EnumParkingLotTypeFieldUpdateOperationsInput | undefined;
}
