import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstParkingLotArgs } from "./args/FindFirstParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class FindFirstParkingLotResolver {
  @TypeGraphQL.Query((_returns) => ParkingLot, {
    nullable: true,
  })
  async findFirstParkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstParkingLotArgs
  ): Promise<ParkingLot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).parkingLot.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
