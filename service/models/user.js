var mongoose = require('./db.js');
var Schema = mongoose.Schema;

/*
 * 集合`users`的文档`User`构造函数
 * @param {Object} user: 包含用户信息的一个对象
 */


var UserSchema = new Schema({
    name: String,
    password: String
});
var UserModel = mongoose.model("users",UserSchema);


var User = function(){};
module.exports = new User();

/*
 * 集合`Post`的文档`Post`构造函数
 * @param {String} nickName: 留言人的昵称
 * @param {String} link: 留言人链接
 * @param {String} email: 留言人邮箱
 * @param {String} textContent: 发言内容
 */
User.prototype.save = function(obj, callback) {
    var instance = new UserModel(obj);
    instance.save(function(err){
        callback(err);
    })
};

/*
 * 集合`Post`的文档`Post`构造函数
 * @param {String} nickName: 留言人的昵称
 * @param {String} link: 留言人链接
 * @param {String} email: 留言人邮箱
 * @param {String} textContent: 发言内容
 */
User.prototype.findByName=function(username, callback){
    UserModel.findOne({name:username},function(err,obj){
        callback(err,obj);
    });
}