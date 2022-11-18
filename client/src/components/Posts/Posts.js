import React from "react";
import PostCard from "./PostCard";
import posts from "../../fakePosts";
import "./Posts.css"

export default function Posts(props) {
    console.log(posts);
    return (
        <section id="posts">
            <h2>Posts</h2>
            {posts.map((post, index) => <PostCard post={post} key={index} />)}
        </section>
    )
}
