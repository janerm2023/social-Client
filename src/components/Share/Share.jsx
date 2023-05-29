import { useState } from "react";
import "./Share.css";
import { MdPermMedia, MdLabel, MdRoom } from "react-icons/md";
import Profile from "../../assets/profile0.avif";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [files, setFiles] = useState(null);
  const [desc, setDesc] = useState("");

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    async (newPost) => {
      return await makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.set("file", files[0]);
    data.set("desc", desc);

    mutation.mutate(data);
  };

  return (
    <form method="post" encType="multipart/form-data" className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Profile} alt="" />
          <input
            type="text"
            placeholder={`What's in your mind ${currentUser.name}?`}
            onChange={(e) => setDesc(e.target.value)}
          />
     
        </div>

        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <input
              type="file"
              id="imgupload"
              style={{ display: "none" }}
              onChange={(e) => setFiles(e.target.files)}
            />
            <label htmlFor="imgupload">
              <div className="shareOption">
                <MdPermMedia className="shareIcon media" id="OpenImgUpload" />
                <span className="shareOptionText" id="OpenImgUpload">
                  Add Image
                </span>
              </div>
            </label>

            <div className="shareOption">
              <MdRoom className="shareIcon label" />
              <span className="shareOptionText">Add Place</span>
            </div>
            <div className="shareOption">
              <MdLabel className="shareIcon room" />
              <span className="shareOptionText">Tag Friends</span>
            </div>
          </div>
          <button className="shareBtn" onClick={handleClick}>
            Share
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
