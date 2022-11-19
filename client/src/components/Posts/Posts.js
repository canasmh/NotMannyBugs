import React from "react";
import PostCard from "./PostCard";
import posts from "../../fakePosts";
import "./Posts.css"

export default function Posts(props) {
    return (
        <section id="posts">
            <h2>Posts</h2>
            <div className="posts-container">
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    )
}
