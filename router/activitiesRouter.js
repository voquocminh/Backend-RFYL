const express = require("express")
const  router = express.Router()
const {Activities} = require("../models/activities")


//get all activities
router.get('/get', async function(req, res){
    var activities = await Activities.find();
    if (activities){
        res.send(activities);
    }else{
        res.status(500).send("bad server !");
    }
})

//get activities by userID
router.get('/userID=:userID', async function(req, res){
    var id = req.params.userID.toString();
    try{
        var activities = await Activities.find({userID: id});
        res.send(activities);
    }catch(err){
        res.send(err)
    }
    console.log(res)
});

//get activity by _id
router.get('/id=:id', async function(req, res){
        var activities = await Activities.findById(req.params.id);
    if (activities){
        res.send(activities);
    }else{
        res.status(500).send("bad server !");
    }
    console.log(res)
});

//post 1 activity
router.post('/post', async function(req, res){
    let activities = Activities(
        {
            userID: req.body.userID,
            distance: req.body.distance,
            time: req.body.time,
            avgPace: req.body.avgPace,
            calories: req.body.calories,
            date: req.body.date,
            routes: req.body.routes,
            marketOnRoute: req.body.marketOnRoute,
            level: req.body.level,
            centerCoordinate: req.body.centerCoordinate
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
            console.log(req)
})

module.exports = router;