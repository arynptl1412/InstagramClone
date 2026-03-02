import React, {useState, useRef} from 'react'
import '../style/createPost.scss'
import { usePost } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

    const context = usePost();

    const {loading, handleCreatePost} = context;
    const [caption, setCaption] = useState("");

    const imgInputFieldRef = useRef(null);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()

        const file = imgInputFieldRef.current.files[0];

        await handleCreatePost(file, caption);

        navigate('/feed')

    }

    if(loading){
        return (
            <main>
                <h1>Creating Post...</h1>
            </main>
        )
    }

    return (
        <main className='create-post-page'>
            <div className="form-container">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>
                    <label className='postImageLabel' htmlFor="postImage">Select Image</label>
                    <input ref={imgInputFieldRef} hidden type="file" name='postImage' id='postImage'/>
                    <input onChange={(e)=>{setCaption(e.target.value)}} type="text" name='caption' id='caption' placeholder='Enter the Post Caption'/>
                    <button type='submit' className='button'>Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost