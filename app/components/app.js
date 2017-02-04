import React from 'react';
import ReactDOM from 'react-dom';

import Side from './Side.jsx';
import Top from './Top.jsx';

import Style  from './common/layout.scss';



class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Side></Side>
                <Top></Top>
                <section className="contentBox">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

React.propTypes = {
    
};

export default App