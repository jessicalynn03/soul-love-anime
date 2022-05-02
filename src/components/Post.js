import { useState } from "react";
function Post() {
    const [postComment, setPostComment] = useState([]);
    const [comment, setComment] = useState("");
    // const [isSent, setIsSent] = useState(false);

    const postSubmit = (e) => {
        e.preventDefault()
        setPostComment([...postComment, comment])
        // setIsSent(true);
    }
    return (
        <div>
            <h2>BLOG POST</h2>
            <form onSubmit={postSubmit}>
                {/* <input className="comment-input" type="text" value={comment} onChange={(e) => {setComment(e.target.value)}}/> */}
                <textarea type='text' value={comment} onChange={(e) => {setComment(e.target.value)}} rows='5' cols='80' id='blog-post'></textarea>
                <hr></hr>
                <input type="submit" value="Create Post" />
            </form>
            <ul className="comment-post">
                {postComment.map((item, index) => {
                    return (
                        <li key={index}>

                            {item}</li>
                    )
                })

                }
            </ul>
        </div>

    )
}

export default Post;