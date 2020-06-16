import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import redis from "redis";
import bluebird from "bluebird";

const startServer = async () => {
  const app = express();
  const client = redis.createClient();
// Promisify the redis methods.
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {client}
  });
  

  client.on('error',(err)=>{
    console.log("Error: "+err);
  });
  server.applyMiddleware({ app });

  app.listen({ port: 8000 }, () =>
    console.log(`Server ready at http://localhost:8000${server.graphqlPath}`)
  );
};

startServer();