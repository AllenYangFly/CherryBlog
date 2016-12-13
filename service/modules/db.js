// 数据库连接
var mongoose = require('mongoose'),
    db = mongoose.connect("mongodb://localhost:27017/blogDB");

mongoose.connection.on('connect', function() {
    console.log('Mongoose is open to:' +DB_URL);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});


var TestSchema = new mongoose.Schema({
    name : {type:String},
    age  : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
});


var TestModel = db.model("test1", TestSchema);


var TestEntity = new TestModel({
    name:'helloworld',
    age:28,
    emial:'helloworld@qq.com'
});

TestEntity.save(function(err,doc){
    if(err){
        console.log("error :" + err);
    } else {
        console.log(doc);
    }
});


module.exports = mongoose;