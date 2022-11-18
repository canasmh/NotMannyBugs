import React from "react";
import NavItems from "./NavItems";
import "./Navigation.css"

export default function Navigation(props) {
    
    return (
        <nav>
            <div className="nav-title">
                <p className=""><a href="#">NotMannyBugs</a></p>
            </div>
            {!props.isMobile ?
            <NavItems /> :
            <button>Nav</button>}
        </nav>
    )
};