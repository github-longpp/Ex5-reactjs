import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import DataContext from '../context/DataContext';
import DataProvider from './DataProvider'

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <NavLink to={to}>{label}</NavLink>
                </li>
            )
        }}/>
    )
}

export class Sidebar extends Component {
    render() {
        return (
            <DataProvider>
                <DataContext.Consumer>
                    {context => (
                        <div className = "side-bar">
                            <div>
                                <div className = "title">
                                    <p>User</p>
                                </div>
                                <ul  className = "list-items">
                                    <MenuLink label={context.information[0]} to="/information" activeOnlyWhenExact='true' />
                                    <MenuLink label={context.history[0]} to="/history" activeOnlyWhenExact='true' />
                                </ul>
                            </div>
                            <div>
                                <div className = "title">
                                    <p>Chức năng</p>
                                </div>
                                <ul className = "list-items">
                                    <MenuLink label={context.buy[0]} to="/buy" activeOnlyWhenExact='true' />
                                    <MenuLink label={context.sell[0]} to="/sell" activeOnlyWhenExact='true' />
                                </ul>
                            </div>
                        </div>
                    )}
                </DataContext.Consumer>
            </DataProvider>
            
        )
    }
}

export default Sidebar
