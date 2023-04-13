import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotUpdateManyMutationInput } from "../../../inputs/ParkingLotUpdateManyMutationInput";
import { ParkingLotWhereInput } from "../../../inputs/ParkingLotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ParkingLotUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ParkingLotWhereInput, {
    nullable: true,
  })
  where?: ParkingLotWhereInput | undefined;
}
