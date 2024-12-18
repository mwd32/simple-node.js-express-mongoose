
import userModel from "./../../../models/user.model.js";
import errorHandler from "./errorHandler.js";

const deleteUser = async (req, res) => {
 
  try {

    const user = await userModel.findByIdAndDelete ( req.params.userId );

    user._id = user._id.toString ();

    return user
      ? res.json({success: true, user})
      : res.status(404).json({success: false, msg: "user not found."})
    
  } catch (err) { errorHandler (err, res) }

};

export default deleteUser;
