import React from "react";
import NavItems from "./NavItems";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-light-svg-icons';

export default function Navigation(props) {
    
    return (
        <nav>
            <div>
                <p className="nav-title"><a href="#">NotMannyBugs</a></p>
            </div>
            {!props.isMobile ?
            <NavItems /> :
            <FontAwesomeIcon icon={faBars} size="lg"/>}
        </nav>
    )
};