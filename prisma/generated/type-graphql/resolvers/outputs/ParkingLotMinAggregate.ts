import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.ObjectType("ParkingLotMinAggregate", {
  isAbstract: true,
})
export class ParkingLotMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  spots!: number | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  contact!: bigint | null;

  @TypeGraphQL.Field((_type) => ParkingLotType, {
    nullable: true,
  })
  parkingType!: "public" | "private" | "courtesy" | null;
}
