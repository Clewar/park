import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueParkingLotArgs } from "./args/FindUniqueParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class FindUniqueParkingLotResolver {
  @TypeGraphQL.Query((_returns) => ParkingLot, {
    nullable: true,
  })
  async parkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueParkingLotArgs
  ): Promise<ParkingLot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).parkingLot.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
