"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
require("reflect-metadata");
const type_graphql_1 = require("../prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
exports.schema = (0, type_graphql_2.buildSchemaSync)({
    resolvers: type_graphql_1.resolvers,
    validate: false
});
