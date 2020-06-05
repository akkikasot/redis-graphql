import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
    students: [Student]
  }
  type Student {
    empid: String
    name: String
  }
  type Response{
    count: Int
    empid:String
    name:String
  }
  type Mutation {
    createStudent(empid: String, name: String): Student
    removeStudent(empid: String): Response
    updateStudent(empid: String, name: String): Response
  }
`;