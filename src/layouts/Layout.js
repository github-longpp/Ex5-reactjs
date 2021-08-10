import React from 'react'
import Sidebar from '../components/Sidebar'
export default function Layout(props) {
    return (
        <div className = "App">
            <Sidebar className={props.className}/>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
