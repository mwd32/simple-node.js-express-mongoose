
import userModel from "./../../../models/user.model.js";
import errorHandler from "./errorHandler.js";

const updateUser = async (req, res) => {
 
  try {

    const user = await userModel.findByIdAndUpdate (
      req.params.userId,
      { ...req.body },
      { 
        new: true, // return the updated user.
        runValidators: true // validate the new user before updating.
      }
    )

    user._id = user._id.toString ();

    return user
      ? res.json({success: true, user})
      : res.status(404).json({success: false, msg: "user not found."})
    
  } catch (err) { errorHandler (err, res) }

};

export default updateUser;
