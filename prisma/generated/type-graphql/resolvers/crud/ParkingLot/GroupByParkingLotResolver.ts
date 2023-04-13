import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByParkingLotArgs } from "./args/GroupByParkingLotArgs";
import { ParkingLot } from "../../../models/ParkingLot";
import { ParkingLotGroupBy } from "../../outputs/ParkingLotGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ParkingLot)
export class GroupByParkingLotResolver {
  @TypeGraphQL.Query((_returns) => [ParkingLotGroupBy], {
    nullable: false,
  })
  async groupByParkingLot(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByParkingLotArgs
  ): Promise<ParkingLotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).parkingLot.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
}
