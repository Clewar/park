import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ParkingLotOrderByWithAggregationInput } from "../../../inputs/ParkingLotOrderByWithAggregationInput";
import { ParkingLotScalarWhereWithAggregatesInput } from "../../../inputs/ParkingLotScalarWhereWithAggregatesInput";
import { ParkingLotWhereInput } from "../../../inputs/ParkingLotWhereInput";
import { ParkingLotScalarFieldEnum } from "../../../../enums/ParkingLotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByParkingLotArgs {
  @TypeGraphQL.Field((_type) => ParkingLotWhereInput, {
    nullable: true,
  })
  where?: ParkingLotWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ParkingLotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "spots" | "contact" | "parkingType">;

  @TypeGraphQL.Field((_type) => ParkingLotScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ParkingLotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
