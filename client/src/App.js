import React from "react";
import CreatePost from "./component/Post/CreatePost";
import PostList from "./component/Post/PostList";

export default () => {
  return <div className="container">
    <CreatePost />
    <hr />
    <h1>Posts</h1>
    <PostList />
  </div>
};