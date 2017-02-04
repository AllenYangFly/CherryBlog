var mongoose = require('./db.js');
var Schema = mongoose.Schema;


/*
 * 集合`Post`的文档`Post`构造函数
 * @param {String} nickName: 留言人的昵称
 * @param {String} link: 留言人链接
 * @param {String} email: 留言人邮箱
 * @param {String} content: 文章内容
 */

var CommitSchema = new Schema({
    nickName: String,
    link: String,
    textContent: String,
    CreateDate: {type:Date,default:Date.now},
    reply: String,
    pageId: String
});

var PostSchema = new Schema({
    title: String,
    linkId: String,
    nickName: String,
    createDate: {type:Date, default:Date.now},
    content: String,
    postType: String,
    commit: [CommitSchema]
});



var PostModel = mongoose.model("Post",PostSchema);
var CommitModel = mongoose.model("Commit",CommitSchema);

var Post = function(){};
module.exports = new Post();


/*
 * 保存一个文章到数据库
 * @param {Function} callback: 执行完数据库操作的应该执行的回调函数
 */  
Post.prototype.save = function(obj, callback) {
    var instance = new PostModel(obj);
    instance.save(function(err){
        callback(err);
    }) 
};


/*
 * 返回所有文章
 * @param {Function} callback: 查询所有文章，执行返回回调函数
 */
Post.prototype.find=function(callback){
    PostModel.find({}).sort({'createDate':'-1'}).exec(function(err,obj){
        callback(err,obj);
    });
}


/*
 * 更新linkId的文章
 * @param {Function} callback: 执行完数据库操作的应该执行的回调函数
 */
Post.prototype.update=function(post, callback){
    PostModel.update(post,function(err,obj){//更新
         callback(err,obj);
    });
}

/*
 * 更新linkId的文章留言
 * @param {Function} callback: 执行完数据库操作的应该执行的回调函数
 */
Post.prototype.updateComment=function(data, callback){
    PostModel.find({linkId: data.pageId},function(err,obj){
        var instance = new CommitModel(data);
        var post = new PostModel(obj);
        

        PostModel.update(post, {'$push':{'commit':instance} }, function(err,obj) {
            callback(err,obj);
        } );

        console.log(obj);
    });
}

/*
 * 查询linkId的文章
 * @param {Function} callback: 返回查询到的结果
 */
Post.prototype.findByLink=function(id, callback){
    PostModel.find({linkId:id},function(err,obj){
        var instance = new PostModel(obj);
        callback(err,obj);
    });
}

/*
 * 删除linkId的文章
 * @param {Function} callback: 返回查询到的结果
 */
Post.prototype.removeByLink=function(id, callback){
    PostModel.remove({linkId:id},function(err,obj){
        callback(err,obj);
    });
}
