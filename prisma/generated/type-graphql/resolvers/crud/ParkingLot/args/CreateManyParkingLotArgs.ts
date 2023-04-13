import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotCreateManyInput } from "../../../inputs/ParkingLotCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyParkingLotArgs {
  @TypeGraphQL.Field((_type) => [ParkingLotCreateManyInput], {
    nullable: false,
  })
  data!: ParkingLotCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
