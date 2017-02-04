var mongoose = require('./db.js');
var Schema = mongoose.Schema;

/*
 * 集合`LeaveBoard`的文档`LeaveBoard`构造函数
 * @param {String} nickName: 留言人的昵称
 * @param {String} link: 留言人链接
 * @param {String} email: 留言人邮箱
 * @param {String} textContent: 发言内容
 */

var LeaveBoardSchema = new Schema({
    nickName: String,
    link: String,
    email: String,
    create_date: {type:Date,default:Date.now},
    textContent: String
});
var LeaveBoardModel = mongoose.model("LeaveBoard",LeaveBoardSchema);


var LeaveBoard = function(){};
module.exports = new LeaveBoard();


/*
 * 保存一条留言到数据库
 * @param {Function} callback: 执行完数据库操作的应该执行的回调函数
 */  
LeaveBoard.prototype.save = function(obj, callback) {
    var instance = new LeaveBoardModel(obj);
    instance.save(function(err){
        callback(err);
    })
};


/*
 * 返回所有留言，并且根据时间排序
 * @param {Function} callback: 查询完数据返回回调函数
 */
LeaveBoard.prototype.find=function( callback){
    LeaveBoardModel.find({}).sort({'create_date':'-1'}).exec(function(err,obj){
        callback(err,obj);
    });
}