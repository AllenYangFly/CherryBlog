import React from 'react';
import {Link, IndexLink} from 'react-router';

import Style from "./SideNav.scss";
class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="SideNav">
                <div className="log">
                    <Link to="/"><img src="./../source/daa7c2d8913dd091dabc404de1b60cdb.svg" /></Link>
                </div>
                <ul className="nav">
                    <IndexLink to="/" activeClassName="active">
                        <li>日志</li>
                    </IndexLink>
                    <Link to="/Comment" activeClassName="active">
                        <li>评论</li>  
                    </Link>  
                    <Link to="/Collection" activeClassName="active">
                        <li> 收藏</li>   
                    </Link> 
                    <Link to="/About" activeClassName="active">
                        <li>关于</li>    
                    </Link>
                </ul>
                
            </section>
        );
    }
}

export default SideNav