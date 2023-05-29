import { useState } from "react";
import { makeRequest } from "../../axios";
import "./Comment.css";
import Comment from "./Comment";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const CommentHeader = ({ postId }) => {
  const [comment, setComment] = useState("");

  const { isLoading, data } = useQuery(["comments"], async () => {
    const res = await makeRequest.get(`/comments/${postId}`);
    return res.data;
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    async (newComment) => {
      return await makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["comments"] });
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ comment, postId });
    setComment(" ");
  };

  return (
    <div className="comment-container">
      <div className="writeComment">
        <img
          src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <form action="" className="comment">
          <input
            type="text"
            placeholder="Write your comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            className="sendCommentBtn"
            type="submit"
            onClick={handleClick}
          >
            Send
          </button>
        </form>
      </div>
      {isLoading
        ? "Loading...."
        : data.map((comment) => {
            return <Comment comment={comment} />;
          })}
    </div>
  );
};

export default CommentHeader;
