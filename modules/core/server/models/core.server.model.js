
'use strict';

var mongoose  = require ('mongoose'),
    Schema = mongoose.Schema;



var validateFieldStrategy = function (property) {
    return property.length;
}


var AnySchema = new Schema({

    name:String,
    completed:Boolean,
    note:String,
    created:{
        type:Date,
        default:Date.now
    }

})

mongoose.model('reena', AnySchema);