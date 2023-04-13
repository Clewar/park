import * as TypeGraphQL from "type-graphql";

export enum ParkingLotType {
  "public" = "public",
  "private" = "private",
  courtesy = "courtesy",
}
TypeGraphQL.registerEnumType(ParkingLotType, {
  name: "ParkingLotType",
  description: undefined,
});
