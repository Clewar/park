import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotUpdateInput } from "../../../inputs/ParkingLotUpdateInput";
import { ParkingLotWhereUniqueInput } from "../../../inputs/ParkingLotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotUpdateInput, {
    nullable: false,
  })
  data!: ParkingLotUpdateInput;

  @TypeGraphQL.Field((_type) => ParkingLotWhereUniqueInput, {
    nullable: false,
  })
  where!: ParkingLotWhereUniqueInput;
}
