import { useState } from "react";
import "./Post.css";
import { MdMoreVert, MdComment, MdShare } from "react-icons/md";
// import { AiFillLike } from "react-icons/ai";
import CommentHeader from "../Comment/CommentHeader";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import ReactTimeAgo from "react-time-ago";

const Post = ({ post }) => {
  const [showComment, setShowComment] = useState(false);

  // const liked = false;

  const { data } = useQuery(["users"], async () => {
    const res = await makeRequest.get(`/users/${post.userId}`);
    return res.data;
  });

  // const { liked } = useQuery(["users"], async () => {
  //   const res = await makeRequest.get(`/users/${post.userId}`);
  //   return res.data;
  // });

  return (
    <div className="posts">
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img src={data?.profilePic} alt="user profile " />
              <span className="postUsername">{data?.name}</span>
              <span className="postDate">
                <ReactTimeAgo
                  date={Date.parse(post.createdAt)}
                  locale="en-US"
                />
              </span>
            </div>
            <div className="postTopRight">
              <MdMoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img
              src={`http://localhost:4000/${post.postImg}`}
              alt="user post"
            />
          </div>
          <div className="postBottom">
            <div className="reactBtns">
              {/* {liked ? (
                <AiFillLike className="reactIcon" />
              ) : (
                <AiFillLike className="reactIcon" />
              )} */}
              <div className="likesText">{post.likes.length} likes</div>
            </div>
            <div
              className="reactBtns"
              onClick={() => setShowComment(!showComment)}
            >
              <MdComment className="reactIcon" />
              <div className="likesText">19 comments</div>
            </div>

            <div className="reactBtns">
              <MdShare className="reactIcon" />
              <div className="likesText">Share</div>
            </div>
          </div>
        </div>
        {showComment && <CommentHeader postId={post._id} />}
      </div>
    </div>
  );
};

export default Post;
