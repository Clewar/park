import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotAvgAggregate } from "../outputs/ParkingLotAvgAggregate";
import { ParkingLotCountAggregate } from "../outputs/ParkingLotCountAggregate";
import { ParkingLotMaxAggregate } from "../outputs/ParkingLotMaxAggregate";
import { ParkingLotMinAggregate } from "../outputs/ParkingLotMinAggregate";
import { ParkingLotSumAggregate } from "../outputs/ParkingLotSumAggregate";

@TypeGraphQL.ObjectType("AggregateParkingLot", {
  isAbstract: true,
})
export class AggregateParkingLot {
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
