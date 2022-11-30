import React, { useState } from "react";
import PostCard from "./PostCard";
import posts from "../../fakePosts";
import PostButtons from "./PostButtons";
import "./Posts.css"

export default function Posts(props) {

    const [sortPosts, setSortPosts] = useState("New");
    const [filterPosts, setFilterPosts] = useState("All")


    return (
        <section id="posts">
            <h2>Posts</h2>
            <PostButtons sort={setSortPosts} filter={setFilterPosts}/>
            <div className="posts-container">
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    )
}
