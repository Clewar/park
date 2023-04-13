import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ParkingLotAvgOrderByAggregateInput } from "../inputs/ParkingLotAvgOrderByAggregateInput";
import { ParkingLotCountOrderByAggregateInput } from "../inputs/ParkingLotCountOrderByAggregateInput";
import { ParkingLotMaxOrderByAggregateInput } from "../inputs/ParkingLotMaxOrderByAggregateInput";
import { ParkingLotMinOrderByAggregateInput } from "../inputs/ParkingLotMinOrderByAggregateInput";
import { ParkingLotSumOrderByAggregateInput } from "../inputs/ParkingLotSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ParkingLotOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ParkingLotOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  spots?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  contact?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  parkingType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ParkingLotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ParkingLotAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ParkingLotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ParkingLotMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ParkingLotSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ParkingLotSumOrderByAggregateInput | undefined;
}
