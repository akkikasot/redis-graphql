import { Student } from "./models/Student";

export const resolvers = {
  Query: {
    students: () => Student.find()
  },
  Mutation: {
    createStudent: async (_, { empid, name }) => {
      const student= new Student({empid:empid, name:name});
      await student.save();
      return student;
    },
    removeStudent:  async(_, { empid }) => {
      const removedStudent= await Student.deleteMany({empid:empid});
      return removedStudent.deletedCount;
    },
    updateStudent: async(_,{empid,name})=>{
      const updatedStudent = await Student.updateMany({empid:empid},{empid:empid,name:name})
      return updatedStudent;
     }
  }
};