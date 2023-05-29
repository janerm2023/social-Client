import { makeRequest } from "../../axios";
import "./Comment.css";
import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const res = await makeRequest.get("/users");
    setUser(res.data);
  };

  useEffect(() => {}, [comment]);

  return (
    <div className="peopleComment">
      <img
        src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="commentDetails">
        <div className="commentContent">
          <h4>John Doe</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            repudiandae dolore soluta voluptate itaque vel eveniet ratione odio,
            officia, repellendus, nobis autem. Consequuntur, ratione delectus
            quisquam temporibus omnis et odio.
          </p>
        </div>
        <span>1 min ago</span>
      </div>
    </div>
  );
};

export default Comment;
