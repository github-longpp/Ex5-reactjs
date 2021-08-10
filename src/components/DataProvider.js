import React, { Component } from 'react'
import DataContext from '../context/DataContext';

const data = {
    information :['Thông tin', 'This is information'],
    history: ['Lịch sử', 'This is history'],
    sell : ['Bán Hàng', 'This is sell page'],
    buy : ['Mua Hàng', 'This is buy page']
}

export default class Data extends Component {
    render() {
        return (
            <DataContext.Provider value= { data }>
                {this.props.children};
            </DataContext.Provider>
        );
    }
}
