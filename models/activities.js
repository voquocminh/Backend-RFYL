const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")

const moment = require("moment")


// Schema là lược đồ database
let activities_schema = mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    distance:{
        type: Number,
        default: 0
    },
    time:{
        type: Number,
        default: 0
    },
    avgPace:{
        type: Number,
        default: 0
    },
    calories:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default:  Date.now //moment().format('LLLL')
    },
    routes:{
        type: Array,
        default: []
    },
    marketOnRoute:{
        type: Array,
        default: []
    },
    level:{
        type: String,
        default: []
    },
    centerCoordinate:{
        latitude:{type: String},
        longitude:{type: String},
        latituDetal:{type: String},
        longituDetal:{type:String},
        default:[]
    }     
})


// Xác thực Unique trường duy nhất)
activities_schema.plugin(uniqueValidator)

exports.Activities = mongoose.model("Activities", activities_schema);

