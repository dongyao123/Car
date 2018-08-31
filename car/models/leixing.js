var mongoose = require("mongoose");
var courseSchema = mongoose.Schema({
    "name" : String,
    "money":Number,
    "leixing":String
});
courseSchema.statics.add = function(json,callback){
    this.create(json,function(err,r){
        callback(err,r);
    });
}
courseSchema.statics.getAll = function(callback){
    this.find({}).exec(function(err,results){
        callback(results);
    });
}


courseSchema.statics.change = function(newJSON){
    this.find({"name" : newJSON["name"]},function(err,results){
        results[0].name = newJSON.name;
        // results[0].phone = newJSON.phone;
        results[0].money = newJSON.money;
        results[0].leixing = newJSON.leixing;

        results[0].save();
    })
}

courseSchema.statics.delete = function(arr,callback){
    var _arr = [];
    arr.forEach(function(item){
        _arr.push({"name" : item});
    });
    this.remove({$or : _arr},function(err,r){
        callback(err,r.n);
    });
};

courseSchema.statics.getzucheall=function (sfzc,callback) {
    this.find({"sfzc":sfzc}).exec(function(err,results){
        callback(results);
    });
}

var Course = mongoose.model("ches",courseSchema);

module.exports = Course;