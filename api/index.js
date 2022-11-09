const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors=require("cors");
const DonationRoute = require("./routes/donations");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(cors()) 

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

app.use("/api/donations", DonationRoute);

app.listen("5000", ()=>{
    console.log("Backend is running.");
});