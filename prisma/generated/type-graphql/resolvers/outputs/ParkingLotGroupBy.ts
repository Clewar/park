import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotAvgAggregate } from "../outputs/ParkingLotAvgAggregate";
import { ParkingLotCountAggregate } from "../outputs/ParkingLotCountAggregate";
import { ParkingLotMaxAggregate } from "../outputs/ParkingLotMaxAggregate";
import { ParkingLotMinAggregate } from "../outputs/ParkingLotMinAggregate";
import { ParkingLotSumAggregate } from "../outputs/ParkingLotSumAggregate";
import { ParkingLotType } from "../../enums/ParkingLotType";

@TypeGraphQL.ObjectType("ParkingLotGroupBy", {
  isAbstract: true,
})
export class ParkingLotGroupBy {
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

  @TypeGraphQL.Field((_type) => ParkingLotCountAggregate, {
    nullable: true,
  })
  _count!: ParkingLotCountAggregate | null;

  @TypeGraphQL.Field((_type) => ParkingLotAvgAggregate, {
    nullable: true,
  })
  _avg!: ParkingLotAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ParkingLotSumAggregate, {
    nullable: true,
  })
  _sum!: ParkingLotSumAggregate | null;

  @TypeGraphQL.Field((_type) => ParkingLotMinAggregate, {
    nullable: true,
  })
  _min!: ParkingLotMinAggregate | null;

  @TypeGraphQL.Field((_type) => ParkingLotMaxAggregate, {
    nullable: true,
  })
  _max!: ParkingLotMaxAggregate | null;
}
