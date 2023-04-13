import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotWhereInput } from "../../../inputs/ParkingLotWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereInput, {
    nullable: true,
  })
  where?: ParkingLotWhereInput | undefined;
}
