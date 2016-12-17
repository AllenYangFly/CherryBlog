import React from 'react';

class Video extends React.Component{
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.refs.sideVideo.style = `height:${window.innerHeight}px; z-index:-1;`;
    }

    render () {
        return (
            <video ref="sideVideo" src={this.props.videoSrc} preload="preload" loop="-1" autoPlay >
            </video>
        );
    }
}

export default Video 