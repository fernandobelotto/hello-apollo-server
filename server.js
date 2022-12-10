import { ApolloServer } from "@apollo/server"
import { typeDefs, resolvers } from "./schema.js"
import { startStandaloneServer } from '@apollo/server/standalone'


const server = new ApolloServer({
    typeDefs,
    resolvers,
})


const bootstrap = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);

}

bootstrap()
