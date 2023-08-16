// Connecting Express
const express = require("express");
const app = express();

const mongoose = require('mongoose');
// Here we are importing the Schema of the project which is on other folder
// const UserModel = require("./models/user.model");
// const College = require("./models/user.model");


const mongoDB = "mongodb://127.0.0.1:27017/crudsoperations"

// Connecting to Mongoose Database
mongoose.connect(mongoDB,{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to Mongoose")
})
.catch(()=>{
    console.log(console.error)
})



// Here we arae making the college Schema

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


// College Schema Data 
const col1 = new College({
    collegename : "chandigarh Uniiversity",
    location : "Chandigarh",
    year : 3
})
col1.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});


const col2 = new College({
    collegename : "IIM patna",
    location : "Patna",
    year : 1
})
col2.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});


const col3 = new College({
    collegename : "Kendriye Vidyalaya",
    location : "Visakhapatnam",
    year : 1
})
col3.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});


College.find()
.then((db)=>{
    console.log("Found data",db);
})
.catch(err=>{
    console.log(err.message);
});



// Here we arae making the user Schema
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
    },
    collegedata : CollgeSchema
})
const UserModel = mongoose.model("UserModel",UserSchema);




// Here We are inserting the values
const user1 = new UserModel({
    name : "Ankit",
    email : "ankit330660@gmail.com",
    mobile : 123456789,
    collegedata : col1
});
user1.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});


const user2 = new UserModel({
    name : "Abhi",
    email : "akgamers330660@gmail.com",
    mobile: 789456123,
    collegedata : col3
})
user2.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});


const user3 = new UserModel({
    name : "Rajesh",
    email : "rajeshkubkp@gmail.com",
    mobile: 963852741,
    collegedata : col2
})
user3.save()
.then(()=>{
    console.log("Saved to database");
})
.catch(err=>{
    console.log(err.message);
});



// Here We are finding the data
UserModel.find()
.then((db)=>{
    console.log("Found data",db);
})
.catch(err=>{
    console.log(err.message);
});



// Here we are Updating the data
UserModel.updateOne({name: "Rajesh"},{$set : {name : "Rajesh kumar"}})
.then(()=>{
    console.log("succesully changed");
})
.catch((err)=>{
    console.log(err.message)
})




// Here we are Deleting the data
UserModel.deleteOne({name:"Rajesh Kumar"})
.then(()=>{
    console.log("Succesfully Deleted");
})
.catch((err)=>{
    console.log(err.message);
});




// Here We are closing the mongoose
// (async () => {
//     try {
//         // Your database operations here
        
//         mongoose.connection.close();
//     } catch (error) {
//         console.error(error.message);
//     }
// })();



// Here we are connecting to the server
app.listen(3000,()=>{
    console.log("Server is ported to 3000")
})
