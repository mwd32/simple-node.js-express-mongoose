
export default ( err, res ) => {
  if ( err.name == "ValidationError" ) {
    const details = Object.values(err.errors).map((err) => ({
      field: err.path, // The field that caused the error
      message: err.message, // The validation error message
    }));
    return res.status(400).json({success: false, details: details[0]});
  }

  if ( err.name == "MongooseError" )
    return res.status(400).json({success: false, msg: err.message});

  console.log ( "err name:", err.name )
  console.log ( "err code:", err.code )
  console.log ( "err message:", err.message )
  console.log ( "err _message:", err._message )
  console.log ( "err errors:", err.errors )
  
  for ( const key of Object.keys (err) ) {
    console.log (key, err[key])
  }

  res.status(500).json({success: false, msg: "something went wrong!"});
}
