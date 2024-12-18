
import userModel from "./../../../models/user.model.js";
import errorHandler from "./errorHandler.js";
import mongoose from "mongoose";

const getUser = async (req, res) => {
 
  try {

    // a bad choice becuase mongoose will continue searching after finding the user.
    // const user = await userModel.find ({_id: userId});

    // const user = await userModel.findOne ({_id: userId}); // is not the best choice

    // getting the userName, email amd age of the user with _id = userId
    const user = await userModel.findById (req.params.userId, "-_id userName email age");
    
    user._id = user._id.toString ();

    return user
      ? res.json({success: true, user})
      : res.status(404).json({success: false, msg: "user not found"})

  } catch (err) { errorHandler (err, res) }

};

export default getUser;
