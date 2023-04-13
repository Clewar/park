import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotWhereUniqueInput } from "../../../inputs/ParkingLotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereUniqueInput, {
    nullable: false,
  })
  where!: ParkingLotWhereUniqueInput;
}
