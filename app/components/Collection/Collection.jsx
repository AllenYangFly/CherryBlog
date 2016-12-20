import React from 'react';

import COLLECTION_DATA from './data.js';
import ContentTitle from './../ContentTitle/ContentTitle.jsx';

import Style from './Collection.scss';

class Collection extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="collection">
                {
                    COLLECTION_DATA.map((item, index) => {
                        return (
                            <div key={index} className="collection-item">
                                <ContentTitle  title={item.title} className="item-title"/>
                                <div className="item-content">
                                    {
                                        item.list.map((itemBit, index) => {
                                            return <a key={"bit-"+index} className="item-bit" target="_blank" href={itemBit.url}>{itemBit.name}</a>
                                        })
                                    }
                                </div>   
                            </div>
                        );
                    })
                }
            </div>
        ); 
    }
}

export default Collection