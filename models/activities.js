const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")


// Schema là lược đồ database
let activities_schema = mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId
    },
    distance:{
        type: Number
    },
    time:{
        type: Number
    },
    avgPace:{
        type: Number
    },
    calories:{
        type: Number
    },
    date:{
        type: mongoose.Schema.Types.Date,
        default: Date.now
    },
})

// Xác thực Unique trường duy nhất)
activities_schema.plugin(uniqueValidator)

exports.Activities = mongoose.model("Activities", activities_schema);

