import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { EnumParkingLotTypeFilter } from "../inputs/EnumParkingLotTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ParkingLotWhereInput", {
  isAbstract: true,
})
export class ParkingLotWhereInput {
  @TypeGraphQL.Field((_type) => [ParkingLotWhereInput], {
    nullable: true,
  })
  AND?: ParkingLotWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotWhereInput], {
    nullable: true,
  })
  OR?: ParkingLotWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ParkingLotWhereInput], {
    nullable: true,
  })
  NOT?: ParkingLotWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  spots?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => BigIntFilter, {
    nullable: true,
  })
  contact?: BigIntFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumParkingLotTypeFilter, {
    nullable: true,
  })
  parkingType?: EnumParkingLotTypeFilter | undefined;
}
