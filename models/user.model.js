const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        lowercase : true
    },
    mobile : {
        type : Number,
    },
    date  :{
        type : Date,
        default : Date.now
    }
})

const UserModel = mongoose.model("UserModel",UserSchema);
module.exports = UserModel;


const CollgeSchema = new mongoose.Schema({
    collegename:  {
        type : String
    },
    location : {
        type : String
    },
    year:  {
        type : Number
    }
})

const College = mongoose.model("College",CollgeSchema);
module.exports = College; 