import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ParkingLotType } from "../enums/ParkingLotType";

@TypeGraphQL.ObjectType("ParkingLot", {
  isAbstract: true,
})
export class ParkingLot {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  spots!: number;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: false,
  })
  contact!: bigint;

  @TypeGraphQL.Field((_type) => ParkingLotType, {
    nullable: false,
  })
  parkingType!: "public" | "private" | "courtesy";
}
