import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotCreateInput } from "../../../inputs/ParkingLotCreateInput";
import { ParkingLotUpdateInput } from "../../../inputs/ParkingLotUpdateInput";
import { ParkingLotWhereUniqueInput } from "../../../inputs/ParkingLotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereUniqueInput, {
    nullable: false,
  })
  where!: ParkingLotWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ParkingLotCreateInput, {
    nullable: false,
  })
  create!: ParkingLotCreateInput;

  @TypeGraphQL.Field((_type) => ParkingLotUpdateInput, {
    nullable: false,
  })
  update!: ParkingLotUpdateInput;
}
