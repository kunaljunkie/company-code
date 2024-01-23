exports.user_lead_validator = (req,res,next) =>{
    try{
        const userdata = req.body
        const globalPhoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (globalPhoneNumberRegex.test(userdata.phone)===false) {
            throw new Error("phone number is not valid")
          } 
          if (emailRegex.test(userdata.email)===false) {
            throw new Error("email is not valid")
          } 
          next()
    }catch(err){
        res.status(500).json({error:err.message})
    }
    
}