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
    removeStudent:  async(_, { age }) => {
      const removedStudent= await Student.deleteMany({age:{$gte:age}});
      return {count:removedStudent.deletedCount,age:age};
    },
    // updateMany has 4 params filter, update, options, callback
    updateStudent: async(_,{empid,student})=>{
      const updatedStudent = await Student.updateMany({empid:empid},
        {empid:student.empid,name:student.name,age:student.age})
      return {count:updatedStudent.nModified,empid:student.empid,name:student.name,age:student.age};
     }
  }
};