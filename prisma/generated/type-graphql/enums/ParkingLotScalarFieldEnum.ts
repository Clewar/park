import * as TypeGraphQL from "type-graphql";

export enum ParkingLotScalarFieldEnum {
  id = "id",
  name = "name",
  spots = "spots",
  contact = "contact",
  parkingType = "parkingType",
}
TypeGraphQL.registerEnumType(ParkingLotScalarFieldEnum, {
  name: "ParkingLotScalarFieldEnum",
  description: undefined,
});
