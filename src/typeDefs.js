import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    students: [Response]
  }
  type Student {
    empid: String
    name: String
  }
  input StudentInput {
    empid: String
    name: String
    age: Int
  }
  type Response{
    count: Int
    empid:String
    name:String
    age : Int
  }
  type Mutation {
    createStudent(empid: String, name: String): Student
    removeStudent(age: Int): Response
    updateStudent(empid: String, student: StudentInput): Response
  }
`;