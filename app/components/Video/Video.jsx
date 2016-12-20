import React from 'react';

class Video extends React.Component{
    constructor (props) {
        super(props);
        this.calculateVideo = this.calculateVideo.bind(this);
    }

    componentDidMount() {
        
        this.calculateVideo();

        window.addEventListener('resize', this.calculateVideo, true);
    }

    calculateVideo () {
      
        if(window.innerWidth > 768) {
            var style = window.innerHeight > window.innerWidth*0.3*(1138/640) ? 'height:'+window.innerHeight : 'width:'+window.innerWidth*0.3;
        }else {
            var style = window.innerHeight > window.innerWidth*(1138/640) ? 'height:'+window.innerHeight : 'width:'+window.innerWidth;
        }
        this.refs.sideVideo.style = style + 'px;z-index:-1;';
        
    }

    render () {
        return (
            <video ref="sideVideo" src={this.props.videoSrc} preload="preload" loop="-1" autoPlay >
            </video>
        );
    }
}

export default Video 