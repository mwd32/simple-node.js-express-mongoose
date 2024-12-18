
import userModel from "./../../../models/user.model.js";
import errorHandler from "./errorHandler.js";
const createUser = async (req, res) => {
 
  try {

    // const user = new userModel ({ ...req.body })
    // await user.save ()

    const user = await userModel.create({ ...req.body }) // is a shortcut of the previous way. ( new instance & save )

    user._id = user._id.toString ();

    return user 
      ? res.status(201).json({success: true, user}) // return user if exists
      : res.status(404).json({success: false, msg: "user not found."}) // if not exists return not found
    
  } catch (err) { errorHandler (err, res) }

};

export default createUser;
