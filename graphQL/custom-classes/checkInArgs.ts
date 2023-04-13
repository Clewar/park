import * as TypeGraphQL from "type-graphql";
import { ParkingLotCheckInInput } from "../custom-inputs/ParkingLotCheckInInput";

@TypeGraphQL.ArgsType()
export class CheckInArgs {
  @TypeGraphQL.Field((_type) => ParkingLotCheckInInput, {
    nullable: false,
  })
  data!: ParkingLotCheckInInput;
  
}