import React from "react";
import styled from "styled-components";
import "./PostCard.css"

const ImageDiv = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 64, 0.9), rgba(0, 0, 32, 0.9)), url(${props => props.image});
    background-size: cover;
    height: 50%;
    color: #FFF;
    padding: 5% 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function PostCard(props) {
    const {title, author, date, image, category} = props.post;

    

    return (
        <div className="post-card">
            <ImageDiv image={image}>
                <h4>{title}</h4>
            </ImageDiv>
            <div className="post-summary">
                <p className="author"><strong>Author: </strong>{author}</p> 
                <p className="date"><strong>Date: </strong> {date}</p>
                <p className="category">{category.split(", ").length === 1 ? <strong>Category: </strong> : <strong>Categories: </strong>}{category}</p>
            </div>
        </div>
    )
}