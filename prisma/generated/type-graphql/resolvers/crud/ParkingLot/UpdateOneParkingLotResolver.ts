import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneParkingLotArgs } from "./args/UpdateOneParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class UpdateOneParkingLotResolver {
  @TypeGraphQL.Mutation((_returns) => ParkingLot, {
    nullable: true,
  })
  async updateOneParkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneParkingLotArgs
  ): Promise<ParkingLot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).parkingLot.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
