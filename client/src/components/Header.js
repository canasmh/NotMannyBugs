import React from "react";

function Header(props) {
    return (
        <nav>
            <div className="nav-title">
                <h3><a href="#">NotMannyBugs</a></h3>
            </div>
            <div className="nav-items">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Categories</a>
                <a href="#" className="nav-item">Log In |</a>
                <a href="#" className="nav-item">Sign Up</a>
            </div>
        </nav>
    )
}

export default Header;