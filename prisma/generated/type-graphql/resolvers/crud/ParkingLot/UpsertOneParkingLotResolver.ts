import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneParkingLotArgs } from "./args/UpsertOneParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class UpsertOneParkingLotResolver {
  @TypeGraphQL.Mutation((_returns) => ParkingLot, {
    nullable: false,
  })
  async upsertOneParkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneParkingLotArgs
  ): Promise<ParkingLot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).parkingLot.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
