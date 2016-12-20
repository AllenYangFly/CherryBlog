import React from 'react';
import Style from './common/layout.scss';

import Video from './Video/Video.jsx';
import SideNav from './SideNav/sideNav.jsx';
import Search from './Search/Search.jsx';

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side ">
                <Video videoSrc="../source/side.mp4"/>
                <div className="side-content">
                    <SideNav></SideNav>
                    <Search></Search>
                </div>
                <div className="sideBorder"></div>
                <a href="https://github.com/allenyangfly" target="_blank">
                    <div className="bottomWord">Develop By @Allen</div>
                </a>
                <img className="close" src="../source/1fb3979b12ef1f9a285eee29b60e9236.svg" />
            </div>
        );
    }
}

Side.protoType = {

}

export default Side