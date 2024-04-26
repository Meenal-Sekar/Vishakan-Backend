const mongoose=require('mongoose');
const signUpTemplate=new mongoose.Schema(
{
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('mytable',signUpTemplate)

// 1.server 2.db 3.table 4.router  (get,post,put,httpmethoed)