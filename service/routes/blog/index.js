var express = require('express');
var router = express.Router();
var path = require('path');
var LeaveBoard = require('./../../models/leaveBoard.js'),
    Post = require("../../models/post.js");
  
/* GET home page. */
router.get('/', function(req, res, next) {
    var blogPath = '../../';
    res.sendFile(path.join(__dirname,  blogPath,'views/blog/dist/index.html'));
});


/*
 * 获取首页文章
 */
router.post('/', function(req,res) {
   
    Post.find(function(err, obj) { 
        if(err){
            res.json({status: 0});
        }else{
            res.json(obj);
        }
    });
});

/*
 * 获取linkId的文章内容
 */
router.post('/post', function(req,res) {
    Post.findByLink(req.body.linkId, function(err, obj) { 

        if(err){
            res.json({status: 0});
        }else{
            res.json(obj);
        }
    });
});

/*
 * 获取linkId的文章内容
 */
router.post('/post/saveComment', function(req,res) {
    Post.updateComment(req.body, function(err) { 
        if(err){
            res.json({status: 0});
        }else{
            res.json({status: 1});
        }
    });
});

/*
 * 获取一页评论
 */
router.get('/comment/getComment', function(req,res) {
    console.log(req.query.pages);
    res.json([{ nickName: 'allen',link: 'allenyang.cn',content: '文章不错支持一下', time: '2016/8/9 05:30', pagesLink: 'http://localhost:3000/pages1.html' },
    { nickName: 'allen',link: 'allenyang.cn',content: '文章不错支持一下', time: '2016/8/9 05:30', pagesLink: 'http://localhost:3000/pages1.html' },
    { nickName: 'allen',link: 'allenyang.cn',content: '文章不错支持一下', time: '2016/8/9 05:30', pagesLink: 'http://localhost:3000/pages1.html' },
    { nickName: 'allen',link: 'allenyang.cn',content: '文章不错支持一下', time: '2016/8/9 05:30', pagesLink: 'http://localhost:3000/pages1.html' },
    { nickName: 'allen',link: 'allenyang.cn',content: '文章不错支持一下', time: '2016/8/9 05:30', pagesLink: 'http://localhost:3000/pages1.html' }]);
});


/*
 * 存储留言
 */
router.post('/about/saveLeave', function(req,res) {
    console.log(req.body);
    LeaveBoard.save(req.body, function(err) { 
        if(err){
            res.json({status: 0});
        }else{
            res.json({status: 1});
        }
    });
});


module.exports = router;
