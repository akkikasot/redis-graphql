import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/students", {
     useNewUrlParser: true,
     useUnifiedTopology: true ,
     //useFindAndModify: false
    }, (err)=>{
        if(!err){
        console.log("DB Connection Success");
    }else{
        console.log(err+"Error in connecting database");
    }
});

  app.listen({ port: 1234 }, () =>
    console.log(`Server ready at http://localhost:1234${server.graphqlPath}`)
  );
};

startServer();