const mongoose = require('mongoose')
const jwt =require('jsonwebtoken')

const userSchema = new mongoose.Schema({

    userfname: { // column name
        type: String   //data type String
    },
    userlname: { // column name
        type: String   //data type String
    },
    date: { // column name
        type: Date  //data type String
    },
    username: { // column name
        type: String   //data type String
    },
    password: {  // column name
        type: String  //data type Number
    },
    passwordconf:{
        type: String
    },
    email:{
        type:String
    },
    imageupload:{
        type: String
    },
    usertype:{
        type:String
    },
    tokens:[{token: {type:String}}]
   
})
//for token
userSchema.statics.checkCrediantialsDb = async (user22, pass) =>{

    const user1 = await user.findOne({username : user22, password : pass})
     return user1;
}

    userSchema.methods.generateAuthToken = async function () {
        const user = this
       const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
       
       console.log(token);
        user.tokens = user.tokens.concat({ token :token })
        await user.save()
        return token
       }

    // creating table in mongoo with name user

const user = mongoose.model('user',userSchema);
module.exports = user ;
