import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotCreateInput } from "../../../inputs/ParkingLotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotCreateInput, {
    nullable: false,
  })
  data!: ParkingLotCreateInput;
}
