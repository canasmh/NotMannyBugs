import React from "react";
import Navigation from "./Navigation/Navigation";
import "./Intro.css"

function Intro(props) {

    // https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
    return (
        <section id='intro'>
            <Navigation isMobile={props.isMobile} />
            <header>
                <h1 className="header-title">NotMannyBugs</h1>
                <div className="slogan-div">
                    <h3 className="header-slogan">More posts. {props.isMobile ? <br /> : null } Less bugs.</h3>
                </div>
            </header>
            <p className="lets-talk-text">Transitioning into tech? <br/> Let's talk about it.</p>
        </section>
    )
}

export default Intro;