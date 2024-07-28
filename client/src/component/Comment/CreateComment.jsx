import React, { useState } from "react";

const CreateComment = ({postId}) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`http://localhost:4001/posts/${postId}/comments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: commentText})
        });

        setCommentText('');
    }

    return (
        <article style={{margin: '10px'}}>
            <form onSubmit={handleSubmit}>
                <label>Comment</label>
                <input className='form-control' type='text' onChange={(e)=>setCommentText(e.target.value)} value={commentText}/>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </article>
    );
}
export default CreateComment;