import React, { Component } from 'react'

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Content
