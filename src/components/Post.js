import {useState} from "react";
function Post(){
    const [postComment, setPostComment] = useState([]);
    const [comment, setComment] = useState("");
    // const [isSent, setIsSent] = useState(false);

    const postSubmit = (e) => {
        e.preventDefault()
        setPostComment([...postComment, comment])
        // setIsSent(true);
    }
    return(
      <div>
          <h2>BLOG POST</h2>
          <form onSubmit={postSubmit}>
              <input className="comment-input" type="text" value={comment} onChange={(e) =>{setComment(e.target.value)}}/> <hr></hr>
              <input type="submit" value="Create Post"/>
          </form>
          <span>{comment}</span>
      </div>

    )
}

export default Post;