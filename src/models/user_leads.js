var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
ObjectId.prototype.valueOf = () => this.toString();
const user_leads = new mongoose.Schema(
  {
   name :{
    type:String
   },
   email:{
    type:String,
   
   },
   phone:{
    type:String,
    
   },
   message:{
    type:String,
    
   }
   
  },
  { strict: false, timestamps: true, collection: "user_leads", versionKey: false }
);
const model = mongoose.model("user_leads", user_leads);
module.exports = model;
