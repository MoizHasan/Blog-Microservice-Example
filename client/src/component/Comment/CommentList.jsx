import React, { useState, useEffect } from "react";

const CommentList = ({postId}) => {
    const [commentList, setCommentList] = useState({});

    useEffect(() => {
        fetchCommentData();
    }, []);

    const fetchCommentData = async () => {
        const response = await fetch(`http://localhost:4001/posts/${postId}/comments`, {
                method: 'GET'
            }
        )
        const json = await response.json();
        setCommentList(json);
    }

    return (
        <ul>
            {Object.values(commentList).map(comment => {
                return <li key={comment.id}>{comment.content}</li>
            })}
        </ul>
    )
}
export default CommentList;