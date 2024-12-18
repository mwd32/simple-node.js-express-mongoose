
import userRouter from "./modules/user/user.controller.js";
import connectDB from "./db/connection.js";


export default async function bootstrap ( app, express ) {
 
  await connectDB ();

  app.use ( express.json() );
  app.use ( "/user", userRouter );

  app.all ( "*", (req,res) => {res.json({msg: "invalid request."})} )

};
