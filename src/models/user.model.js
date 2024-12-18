

import mongoose, {Schema} from "mongoose";

// define user schema
const userSchema = new Schema ({

  userName: {
    type: String,
    required: [ true, "userName is required." ],
    minLength: [ 3, "userName must be more than 3 chars." ],
    maxLength: [ 20, "userName must be 20 chars maximumly." ],
  },
  
  email: {
    type: String,
    required: [ true, "email is required." ],
    match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "invalid email." ], // regular expression of email.
    unique: [ true, "the provided email is in use." ]
  },
  
  password: {
    type: String,
    required: [ true, "password is required." ]
  },
  
  age: {
    type: Number,
    required: [ true, "age is required." ],
    
    // min: [ 18, "you must be 18 years at least" ],

    validate: {
      validator: (value) => {
        // if ( value < 18 ) return false
        return !( value < 18 )
      },
      message: (props) => `${props.value} is not valid.` // props.value is the provided age
    }
  }, 
  
  isConfirmed: {
    type: Boolean,
    default: false
  },

  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      default: "male",
      message: "gender must be either male or female."
    },
  }

},

{ timestamp: true }

);


// define user model
const userModel = mongoose.model ( "User", userSchema );

export default userModel;
