import React, { useState, useEffect } from "react";
import CreateComment from "../Comment/CreateComment";
import CommentList from "../Comment/CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetchPostData();
    }, []);

    const fetchPostData = async () => {
        const response = await fetch('http://localhost:4000/posts', {
                method: 'GET'
            }
        ) 
        const json = await response.json();
        setPosts(json);
    }

    return (
        <>
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {Object.values(posts).map((post) => {
                return <article key={post.id} className="card" style={{width: '30%', marginBottom: '20px'}}>
                            <div className='card-body'>
                                <h2>{post.title || post.id}</h2>
                                </div>
                            <CreateComment postId={post.id} />
                            <CommentList postId={post.id} />
                        </article>
            })}
        </div>
        </>
    )
};

export default PostList;