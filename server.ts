import 'reflect-metadata';
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { PrismaClient } from '@prisma/client';
import { CreateOneParkingLotArgs, ParkingLot, resolvers } from './prisma/generated/type-graphql';
import { buildSchemaSync, Resolver, Ctx, Query } from 'type-graphql';
import * as TypeGraphQL from "type-graphql";
import path from 'path';
import { transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from './prisma/generated/type-graphql/helpers';
import { GraphQLResolveInfo } from 'graphql';
import { CheckInArgs } from './graphQL/custom-classes/checkInArgs';

// Create an express server and a GraphQL endpoint
const app = express();
const prisma = new PrismaClient();

interface Context {
    prisma: PrismaClient;
}

@Resolver(of => ParkingLot)
class CustomParkingLotResolver {
    @Query(_returns => String, {
        nullable: false,
    })
    async parkingLotCheckIn(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: CheckInArgs,
    ): Promise<String> {
        const { _count } = transformInfoIntoPrismaArgs(info);
        let response = 'Check in failed';
        const today = new Date();
        const parkingLot = await ctx.prisma.parkingLot.findFirst({
            where: {
                id: args.data.parkingLotId
            }
        })
        if (!parkingLot) {
            throw new Error('Parking lot not found');
        }

        switch (parkingLot.parkingType) {
            case 'public':
                response = 'Check in successful';
                break;
            case 'private': 
                if (args.data.userType === 'corporate') {
                    if (today.getDay() === 0 || today.getDay() === 6) {
                        response = 'You cannot check in on a weekend';
                    } else {
                        response = 'Check in successful';
                    }
                }
                break;
            case 'courtesy':
                if (args.data.userType === 'visitor') {
                    // Check if it is a weekend
                    if (today.getDay() === 0 || today.getDay() === 6) {
                        response = 'Check in successful';
                    }
                }
        }

        return response;
    }
                

    @TypeGraphQL.Mutation((_returns) => ParkingLot, {
        nullable: false,
    })
    async createOneCorrectParkingLot(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: CreateOneParkingLotArgs,
    ): Promise<ParkingLot> {
        const { _count } = transformInfoIntoPrismaArgs(info);
        // Only allow parking lots with more than 50 spots and less than 1500 spots
        if (args.data.spots < 50 || args.data.spots > 1500) {
            throw new Error('Parking lots must have at least 50 spots and no more than 1500 spots');
        }
        // Parking lot name should not be already taken
        const parkingLot = await ctx.prisma.parkingLot.findFirst({
            where: {
                name: args.data.name
            }
        });
        if (parkingLot) {
            throw new Error('Parking lot name already taken');
        }
        return ctx.prisma.parkingLot.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
}

export const schema = buildSchemaSync({
  resolvers: [CustomParkingLotResolver, ...resolvers],
  emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
  validate: false
});

app.use('/graphql', createHandler({
  schema,
  context: () => ({ prisma })
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
