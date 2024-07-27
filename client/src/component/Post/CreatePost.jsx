import React, {useState} from "react";

const CreatePost = () => {

    const [postTitle, setPostTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
       await fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title: postTitle })
       });

       setPostTitle('');
    }

    return (
        <>
        <form onSubmit={onSubmit}>
        <h1>Create Post</h1>
        <div className="form-group">
            <div>{postTitle}</div>
            <input className='form-control' type='text' onChange={(e) => setPostTitle(e.target.value)} value={postTitle} />
            <button className='btn btn-primary'>Submit</button>
        </div>
        </form>
        </>
    )
};

export default CreatePost;