import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        return (
            <div className = "navigation">
                <div className="nav-title">{this.props.title}</div>
                <div className="user-appear">
                    <div className=""><i className="fas fa-user"></i></div>
                    <div className="user-name">
                        Phạm Phi Long
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
