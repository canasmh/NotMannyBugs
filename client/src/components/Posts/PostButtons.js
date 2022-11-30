import React from "react";


export default function PostButtons(props) {

    const {filter, sort} = props;

    const setSort = (evt) => {
        const value = evt.target.value;
        sort(value)
    }

    const setFilter = (evt) => {
        const value = evt.target.value;
        filter(value)
    }

    return (
        <div class="post-buttons">
            <div class="button-container">
                <label htmlFor="sortPosts">Sort By: </label>
                <select id="sortPosts" onChange={setSort}>
                    <option value="New">Newest to Oldest</option>
                    <option value="Old">Oldest to Newest</option>
                    <option value="mostLiked">Most Likes</option>
                </select>
            </div>
            <div class="button-container">
                <label htmlFor="filterPosts">Category: </label>
                <select id="sortPosts" onChange={setFilter}>
                    <option value="All">All</option>
                    <option value="Python">Python</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Advanced CSS">CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="React">React</option>
                    <option value="Interview">Interview Prep</option>
                    <option value="Career">Career Development</option>
                </select>
            </div>
        </div>
    )
}