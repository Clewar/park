import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotWhereUniqueInput } from "../../../inputs/ParkingLotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueParkingLotOrThrowArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereUniqueInput, {
    nullable: false,
  })
  where!: ParkingLotWhereUniqueInput;
}
