import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateParkingLotArgs } from "./args/AggregateParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import { AggregateParkingLot } from "../../outputs/AggregateParkingLot";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class AggregateParkingLotResolver {
  @TypeGraphQL.Query((_returns) => AggregateParkingLot, {
    nullable: false,
  })
  async aggregateParkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateParkingLotArgs
  ): Promise<AggregateParkingLot> {
    return getPrismaFromContext(ctx).parkingLot.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
