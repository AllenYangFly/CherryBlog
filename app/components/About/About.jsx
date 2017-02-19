import React from 'react';
import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import CommentForm from './../CommentForm/CommentForm.jsx';
import Style from './About.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render () {
        let ProjectInfo = [
            {
                title: "樱花博客",
                intro: "",
                img: "http://huangxuan.me/portfolio/images/work-yanshuo.jpg",
                time: "2017.1",
                code: "https://github.com/AllenYangFly/CherryBlog",
                demo: "http://60.205.188.119/"
            },{
                title: "SoketScreen",
                intro: "",
                img: "http://huangxuan.me/portfolio/images/work-yanshuo.jpg",
                time: "2017.2",
                code: "",
                demo: ""
            },{
                title: "基地官方APP",
                intro: "",
                img: "http://huangxuan.me/portfolio/images/work-yanshuo.jpg",
                time: "2016.11",
                code: "https://github.com/xgcyjd2014/JD_app",
                demo: "http://60.205.188.119/"
            },{
                title: "DancingKing",
                intro: "2017.2",
                img: "http://huangxuan.me/portfolio/images/work-yanshuo.jpg",
                time: "2016.10",
                code: "https://github.com/AllenYangFly/DancingKing",
                demo: "",
            },{
                title: "",
                intro: "",
                time: "2016.5",
                img: "http://huangxuan.me/portfolio/images/work-yanshuo.jpg",
                code: "",
                demo: ""
            }
        ];

        let ProjectList = [];

        ProjectInfo.map((item,index) => {
            ProjectList.push(
                <li className="list-item" key={index}>
                    <h2 className="pro-name">{item.title}</h2>
                    <time>{item.time}</time>
                    <img src={item.img} />
                    <ul>
                        <li>
                            {item.intro}
                        </li>
                        <li className="pro-control">
                            <span className="i-code"><a target="_blank" href={item.code}>Code</a></span>
                            <span className="i-demo"><a target="_blank" href={item.demo}>Demo</a></span>
                        </li>
                    </ul>
                </li>
            );
        });

        return (
            <section>   
                <div className="intro">
                    <ContentTitle title="关于" isSingle={true}/>
                    <div className="intro-top">
                        
        
                        <h2 id="section">个人简介</h2>
                        <p>Allen，2016年接触前端，热爱这个将技术与艺术完美结合的职业。2016底自己搭了这个博客，前端用的react+redux后台用的express+mongod。allenyang.cn是我的域名。</p>

                        <p>今年大三，正在找实习，觉得合适的老司机求带走。<a target="_blank" href="http://60.205.188.119/source/杨亚洲 - 2018前端实习 - 可实习6个月.pdf">我的简历</a></p>

                        <p><img src="./../../source/wechat.jpg" alt="Allen的微信" width="240" height="240" /></p>


                        <h2 id="section">一些作品</h2>
    
                    </div>

                    <ul className="intro-list">
                        {ProjectList}
                    </ul>
                </div>
                <ContentTitle title="给我留言" isSingle={true}/>
                <CommentForm url="http://localhost:3000/about/saveLeave"/>
            </section>
        );
    }
}

export default About