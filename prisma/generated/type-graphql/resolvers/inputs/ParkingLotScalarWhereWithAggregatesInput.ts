import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { EnumParkingLotTypeWithAggregatesFilter } from "../inputs/EnumParkingLotTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ParkingLotScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ParkingLotScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ParkingLotScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ParkingLotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ParkingLotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ParkingLotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  spots?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BigIntWithAggregatesFilter, {
    nullable: true,
  })
  contact?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumParkingLotTypeWithAggregatesFilter, {
    nullable: true,
  })
  parkingType?: EnumParkingLotTypeWithAggregatesFilter | undefined;
}
