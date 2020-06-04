import mongoose from "mongoose";

export const Student = mongoose.model("Student", { 
        empid: String,
        name: String 
        
    });