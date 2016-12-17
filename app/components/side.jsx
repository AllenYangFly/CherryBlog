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
            <div className="side">
                <Video videoSrc="../source/side.mp4"/>
                <div className="side-content">
                    <SideNav></SideNav>
                    <Search></Search>
                </div>
                <div className="sideBorder"></div>
            </div>
        );
    }
}

Side.protoType = {

}

export default Side