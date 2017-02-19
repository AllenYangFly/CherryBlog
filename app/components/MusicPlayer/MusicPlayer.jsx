import React from 'react';
import { connect } from 'react-redux'

import Style from './MusicPlayer.css';
import { FetchMusic } from './../../action/action.js'
import Player from './player.js'

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            music:[],
            index: -1,
            playStatus: 1,
            pPos: 0,
            mTime: '00:00'
        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleOnOff = this.handleOnOff.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.setIndex = this.setIndex.bind(this);
        this.bindProgress = this.bindProgress.bind(this);
        this.setCurrTime = this.setCurrTime.bind(this);
    }

    componentDidMount() {
        Player.init();
        Player.audioObj.addEventListener('timeupdate', this.bindProgress);
        return fetch("http://localhost:3000/getFiles",{
            method: "GET", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                music : data,
                index: 0
            })
            Player.play(this.state.index);
        }).catch(function(e) {
            console.log("Oops, error");
        });
    }

    handlePrev() {
        if(this.state.index <= 0) {
            this.setState({
                index : this.state.music.length-1
            })
        }else {
            this.setState({
                index : --this.state.index
            })
        }
        Player.playPri();
    }

    handleOnOff() { 
        this.setState({
            playStatus : this.state.playStatus ? 0 : 1
        })
        if(this.state.playStatus) {
            Player.stop();
        } else {
            Player.play(this.state.index);
        }
    }

    handleNext() {
        if(this.state.index >= this.state.music.length-1) {
            this.setState({
                index : 0
            })
        }else {
            this.setState({
                index : ++this.state.index
            })
        }
        Player.playNext();
    }

    setIndex(event) {
        var index = event.target.getAttribute('data-key')
        Player.play(index);
        this.setState({
            playStatus : 1,
            index: index
        })
    }

    bindProgress() {  
        var cTime = Player.audioObj.currentTime;
        var tTime = Player.audioObj.duration;
        this.setCurrTime(cTime,tTime);
        if (cTime >= tTime) {
            this.handleNext();
        }
        
    }

    setCurrTime(cTime,tTime) {
        var per = (tTime<=0)?0:cTime/tTime;
        var PE = parseInt(window.getComputedStyle(this.refs.PEleme, null).width);
        var pPos = PE*per;
            
        var time = parseInt(cTime);
        var Mi = parseInt(time/60) == 0 ? '00' : '0' + parseInt(time/60);
        var Se = time%60 < 10 ? '0' + time%60 : time%60;
        this.setState({
            pPos : pPos,
            mTime: Mi +':'+ Se
        })


    }

    render () {
        const data = this.state.music; 
        const mList = [];

        for(var item in data) {
            if(item == this.state.index) {
                mList.push( <p onClick={(e) => this.setIndex(e)} className="item active" data-key={item} id={ item } key={ item }>{ data[item] }</p> );
            }else {
                mList.push( <p onClick={(e) => this.setIndex(e)} className="item" data-key={item} id={ item } key={ item }>{ data[item] }</p> );
            }
            Player.add(data[item], '/musics/' + data[item]);
        }
        
        return (
            <div id="container-wrap">
                <div id="m-container">        
                    <div className="m-progress">
                        <span className="time">{this.state.mTime}</span>
                        <canvas></canvas>
                        <span className="bot" style={{left: this.state.pPos + 'px'}}>
                            <em></em>
                        </span>
                        <p ref="PEleme"></p>
                    </div>

                    <div id="title">{(this.state.index+1) ? data[this.state.index].split('.mp3')[0] : '歌曲名'}</div>

                    <div className="m-control">
                        <div className="prev" onClick={() => this.handlePrev()}></div>
                        <div className={"play " + (this.state.playStatus ? "" : "pause")} onClick={() => this.handleOnOff()}></div>
                        <div className="next" onClick={() => this.handleNext()}></div>
                    </div>

                    <div className="m-list">
                        { mList }
                    </div>
                </div>
            </div>
        );
    }
}


MusicPlayer.protoType = {
    
}


const mapStateToProps = (state) => {
    return {
        data: state.fetchMusic.data,
        state: state.fetchMusic.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMusic: () => {
            dispatch(FetchMusic())
        }
    }
}



export default MusicPlayer