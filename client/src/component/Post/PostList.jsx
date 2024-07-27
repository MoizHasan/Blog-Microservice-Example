import React, {useState, useEffect} from "react";

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
        console.log(json);
        setPosts(json);
    }

    return (
        <>
        <ul>
            {Object.keys(posts).map((key) => {
                return <li key={key}>{posts[key].title}</li>
            })}
        </ul>
        </>
    )
};

export default PostList;