const router =require("express").Router();
const Donation = require("../models/Donation");

//Add donation
router.post("/add", async (req,res) => {
    const newDonation = new Donation(req.body);
    try{
        const donationcount = await Donation.count()
        newDonation.donation_id = 'D00' + (parseInt(donationcount)+1)
        try{
            const donation = await newDonation.save();
            res.status(200).json(donation);
        } catch (err){
            res.status(500).json(err);
        }
    }catch(err){
        console.log(err);
    }
});

module.exports = router;