import * as TypeGraphQL from "type-graphql";

enum UserType {
  corporate = "corporate",
  provider = "provider",
  visitor = "visitor",
}
TypeGraphQL.registerEnumType(UserType, {
  name: "UserType",
  description: undefined,
});


@TypeGraphQL.InputType("ParkingLotCheckInInput", {
  isAbstract: true,
})
export class ParkingLotCheckInInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  parkingLotId!: string;

  @TypeGraphQL.Field((_type) => UserType, {
    nullable: false,
  })
  userType!: "corporate" | "provider" | "visitor";
  
}