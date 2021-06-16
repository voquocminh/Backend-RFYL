const express = require("express")
const  router = express.Router()
const { Activities } =require("../models/activities")

//get all activities
router.get('/',async function(req,res){
    var activities = await Activities.find();
    if(activities){
        res.send(activities);
    }else{
        res.status(500).send("Bad server");
    }
})

//post 1 activity
router.post('/insert', async function(req,res){
    let activities = Activities({
        userID: req.body.userID,
        distance: req.body.distance,
        time: req.body.time,
        avgPace: req.body.avgPace,
        calories: req.body.calories,
        date: req.body.date,
    });
    activities
    .save()
    .then((newActivities)=>{
        res.send({
            userID: newActivities.userID,
            distance: newActivities.distance,
            time: newActivities.time,
            avgPace: newActivities.avgPace,
            calories: newActivitiescalories,
            date: newActivities.date,
            })
        console.log("saved activity !")
    })
    .catch((err)=>{
        res.status(500).json({
            error: err,
            status: 'Failure',
        });
    });
})

module.exports = router;