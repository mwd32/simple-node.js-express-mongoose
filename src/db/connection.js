
import mongoose from "mongoose";

export default async () => {

  try {

    await mongoose.connect ("mongodb://127.0.0.1:27017/mongoose");
    console.log ( "Mongoose connected mongo server successfully." );

  } catch (err) {

    console.log ( "a Mongoose error heppened while connecting mongo server." );
    console.error (err);

  }

}
