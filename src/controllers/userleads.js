const userleads = require('../models/user_leads')
exports.user_leads = async(req,res) =>{
    try{
        const userdata= req.body
        const user_OBJ = {
            name: userdata.firstname +" "+ userdata.lastname,
            email: userdata.email,
            phone: userdata.phone,
            message: userdata.message
        }
        const userleadsData = await userleads.create(user_OBJ)
        if(userleadsData){
            res.status(200).json({message:`thank you ${userdata.firstname}..., we are proceeding`})
        } else
        {
            res.status(400).json({message:`something went wrong ${userdata.firstname}..., unable to proceed`})
        }

    }catch(err){
        res.status(500).json({error:err})

    }
}