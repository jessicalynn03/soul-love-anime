import {useState} from "react";
function Post(){
    const [commentPost, setCommentPost] = useState("");
    return(
      <div>
          <h2>BLOG POST</h2>
          <form>
              <input type="text"/>
              <input type="submit" value="Create Post" onChange={(e) =>{setCommentPost(e.target.value)}}/>
          </form>
          <span>{commentPost}</span>
      </div>

    )
}

export default Post;