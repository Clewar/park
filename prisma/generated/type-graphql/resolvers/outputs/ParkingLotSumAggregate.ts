import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ParkingLotSumAggregate", {
  isAbstract: true,
})
export class ParkingLotSumAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  spots!: number | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  contact!: bigint | null;
}
