import React from 'react';
import Style from './common/layout.scss'

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top">
                <img src="../source/6c0d4fd025b14c6963c623ca65b7aafc.svg" />
                <h3>Allen - 抹茶小屋</h3>
            </div>
        );
    }
    
}

Side.protoType = {

}

export default Side