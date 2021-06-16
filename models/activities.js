const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")

let activities_schema = mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true,
        unique: true
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
       type: Date
   }
})

// Xác thực Unique (username là trường duy nhất)
food_schema.plugin(uniqueValidator)

exports.Activities = mongoose.model("Activities", activities_schema);
