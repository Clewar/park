import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotOrderByWithRelationInput } from "../../../inputs/ParkingLotOrderByWithRelationInput";
import { ParkingLotWhereInput } from "../../../inputs/ParkingLotWhereInput";
import { ParkingLotWhereUniqueInput } from "../../../inputs/ParkingLotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereInput, {
    nullable: true,
  })
  where?: ParkingLotWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ParkingLotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ParkingLotWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}