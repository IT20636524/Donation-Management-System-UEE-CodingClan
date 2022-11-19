const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
    {
        donation_id:{
            type:String,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        amount:{
            type:String,
            required:true,
        },
        note:{
            type:String,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Donation",DonationSchema);