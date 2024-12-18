
import userModel from "./../../../models/user.model.js";
import errorHandler from "./errorHandler.js";

const getUsers = async (req, res) => {
 
  try {

    const page = parseInt (req.query.page); // current page number
    const limit = parseInt (req.query.limit); // limit of users in every page

    const users = await userModel
      .find ({ ...req.body }) // find all users according to request body.
      .sort ({age: 1}) // sort users by age.
      .skip (page*limit) // skip the users of the previous pages
      .limit (limit) // getting a selected number of users

    for ( const user of users ) {
      user._id = user._id.toString ();
    }

    return users.length
      ? res.json({success: true, users})
      : res.status(404).json({success: false, msg: "no matched users."})

    ;
    
  } catch (err) { errorHandler (err, res) }

};

export default getUsers;
