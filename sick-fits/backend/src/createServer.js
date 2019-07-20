const { GraphQLServer } = require('graphql-yoga');

// resolvers = where does the data come from or what does the data do in the db

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// create the GraphQL Yofa server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db }),

    });
}

module.exports = createServer;