import React from 'react';
import Style from './Search.scss';


class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div id="search">
                <input type="text"  placeholder="SEARCH" title="回车搜索" />
            </div>
        );
    }
}



export default Search