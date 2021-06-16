const express = require("express")
const  router = express.Router()
const {Activities} = require("../models/activities")

router.get('/get', async function(req, res){
    var activities = await Activities.find();
    if (activities){
        res.send(activities);
    }else{
        res.status(500).send("bad server !");
    }
})

router.post('/post', async function(req, res){
    let activities = Activities(
        {
            userID: req.body.userID,
            distance: req.body.distance,
            time: req.body.time,
            avgPace: req.body.avgPace,
            calories: req.body.calories,
            date: req.body.date,
        })
        activities
            .save()
            .then((activities)=>{
                res.send('đã thêm activities !')
                console.log("đã thêm activities !")
            })
            .catch((err)=>{
                res.send(err)
            })
})

module.exports = router;