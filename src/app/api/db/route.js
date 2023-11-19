import { NextResponse } from "next/server";
import { dbLink } from "@/app/db/db.config";
import mongoose from "mongoose";

const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    pwd: String
}));

export async function GET() {
  try {
    await mongoose.connect(dbLink);


    // const newUser=new User({username:'ashihsh',email:'djjasdj@dsdas.das',pwd:'348sji3423iasd'});


    // let res=await newUser.save();
    // Use the model to find all users
  
    const dbData = await User.find();

    console.log(dbData);

    return NextResponse.json({data: dbData });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return NextResponse.error({ error: "Internal Server Error" });
  } finally {
    // Always close the database connection, whether there's an error or not
    mongoose.disconnect();
    console.log('database disconnected !')
  }
}
