## 文章页面
文章标题
文章时间
文章ID


## 文章info页面
文章标题
文章内容
文章评论细节（评论昵称 个人链接 评论内容 评论时间）
评论表单(昵称 个人链接 留言内容)


## 评论页面
评论昵称
个人链接
评论内容
评论时间
评论文章链接
req
{
    pages:1 当前评论页数
}

查询所有发言，并且返回一页

    res 
    {
        nickName: 'allen',
        link: 'allenyang.cn',
        content: '文章不错支持一下',
        replayContent: '感谢',
        time: '2016/8/9 05:30', 
        pagesLink: 'http://localhost:3000/pages1.html'
    }


## 关于页面(OK)
昵称
个人邮箱
个人链接
留言内容
req
{
    nickName: 'allen',
    link: 'allenyang.cn',
    email: 'allenyang1995@outlook.com',
    textContent: '博客很漂亮，我可以fork一下吗？'
}

保存一条留言到数据库中，返回status
res 
{
    status: 1  // 保存成功
    status: 0  // 保存失败
}