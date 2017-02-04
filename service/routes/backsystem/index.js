// 引入需要的模块
var express = require('express'),
    router = express.Router(),
    crypto = require('crypto'),
    User = require('../../models/user.js'),
    Post = require("../../models/post.js"),
    LeaveBoard = require('../../models/leaveBoard.js');

// 主页路由
router.get('/', function(req, res) {
    Post.find(function(err, obj) {
        res.render('index', {
            title: '首页',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            posts: obj
        });
    });
});

//  删除文章
router.get("/removePost", function(req, res) {
    Post.findByLink(req.query.linkId, function(err, post) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/');
        }

        Post.removeByLink(req.query.linkId, function(err) {
            if(err){
                req.flash('error', err);
                return res.redirect('/admin/');
            }
            req.flash('success', '删除成功');
            res.redirect('/admin/');
        });
    });
});

// 更新文章路由
router.get("/postInfo", function(req, res) {
    Post.findByLink(req.query.linkId, function(err, post) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/');
        }
        res.render('postInfo', {
            title: '修改文章',
            posts: post[0]
        });
    });
});

// 保存更新文章
router.post("/postInfo/savePost", function(req, res) {
    Post.update(req.body, function(err, obj) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/postInfo');
        }
        req.flash('success', '更新成功');
        res.redirect('/admin/postInfo?linkId=' + req.body.linkId);
    });
});

// 注册页路由
router.get("/reg",checkNotLogin);
router.get("/reg",function(req,res) {
    res.render("reg",{
        title : "用户注册"
    });
});

router.post("/reg",checkNotLogin);
router.post("/reg",function(req,res) {
    if (req.body['password-repeat'] != req.body['password']) {
        req.flash('error', '两次输入的口令不一致');
        return res.redirect('/admin/reg');
    }
    console.log(req.body['password'])

    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = {
        name: req.body.username,
        password: password,
    };
    //检查用户名是否已经存在
    User.findByName(newUser.name, function(err, user) {
        if (user)
            err = 'Username already exists.';
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/reg');
        }

        User.save(newUser, function(err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/admin/reg');
            }
            req.session.user = newUser;
            req.flash('success', '注册成功');
            res.redirect('/admin/');
        });
    });
});

// 登录页路由
router.get("/login",checkNotLogin);
router.get("/login",function(req,res) {
    res.render("login",{
        title:"用户登入",
    });
});

router.post("/login",checkNotLogin);
router.post("/login",function(req,res) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    User.findByName(req.body.username, function(err, user) {
        if (!user) {
            req.flash('error', '用户不存在');
            return res.redirect('/admin/login');
        }
        if (user.password != password) {
            req.flash('error', '用户口令错误');
            return res.redirect('/admin/login');
        }
        req.session.user = user;
        req.flash('success', '登入成功');
        res.redirect('/admin/');
    });
});

// 登出页路由
router.get("/logout",checkLogin);
router.get("/logout",function(req,res) {
    req.session.user = null;
    req.flash('success', '登出成功');
    res.redirect('/admin/');
});


function checkLogin(req, res, next) {
    if (!req.session.user) {
        req.flash('error', '未登入');
        return res.redirect('/admin/login');
    }
    next();
}
function checkNotLogin(req, res, next) {
    if (req.session.user) {
        req.flash('error', '已登入');
        return res.redirect('/admin/');
    }
    next();
}

// 发言路由
router.post("/post",checkLogin);
router.post("/post",function(req,res) {
    var currentUser = req.session.user;
    var post = new Post(currentUser.name, req.body.post);
    post.save(function(err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/');
        }
        req.flash('success', '发表成功');
        res.redirect('/admin/u/' + currentUser.name);
    });
});

// 注册页路由
router.get("/reg",checkNotLogin);
router.get("/reg",function(req,res) {
    res.render("reg",{
        title : "用户注册"
    });
});


// 新增文章
router.get("/newPost",checkLogin);
router.get("/newPost",function(req,res) {
    res.render("newPost",{
        title : "新增文章"
    });
});

// 保存文章
router.post("/newPost/savePost", function(req, res) {
    //  防止LinkId重复发表文章，保证LinkId唯一
    Post.findByLink(req.body.linkId, function(err, post) {
        console.log(post);
        console.log(req.body.postType);
        if (post.length)
            err = 'PostID already exists.';
        if (err) {
            req.flash('error', err);
            return res.redirect('/admin/newPost');
        }

        Post.save(req.body, function(err) {
            if(err){
                req.flash('error', err);
                return res.redirect('/admin/newPost');
            }
            req.flash('success', '发表成功');
            res.redirect('/admin/newPost');
        });
    });
    
});


// 查看留言
router.get("/leaveBoard",checkLogin);
router.get("/leaveBoard",function(req,res) {

    LeaveBoard.find(function(err, obj) {
        res.render("leaveBoard",{
            title : "查看留言",
            leaveBoard: obj
        });
    });
    
});


router.get("/u/:user",function(req,res) {
    User.get(req.params.user, function(err, user) {
        if (!user) {
            req.flash('error', '用户不存在');
            return res.redirect('/admin/');
        }
        Post.get(user.name, function(err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/admin/');
            }
            res.render('user', {
                title: user.name,
                posts: posts,
            });
        });
    });
});


module.exports = router;
