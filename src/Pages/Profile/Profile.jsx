import "./Profile.css";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { HiDotsVertical, HiLocationMarker } from "react-icons/hi";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Post from "../../components/Posts/Post";

const Profile = () => {
  return (
    <div className="profileContainer">
      <img
        className="coverProfileImage"
        src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="profileTop">
        <div className="profileContent">
          <div className="profileContentLeft">
            <Link to="">
              <BsFacebook />
            </Link>
            <Link to="">
              <BsLinkedin />
            </Link>
            <Link to="">
              <BsTwitter />
            </Link>
            <Link to="">
              <BsInstagram />
            </Link>
            <Link to="">
              <BsPinterest />
            </Link>
          </div>
          <div className="profileContentCenter">
            <img
              src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="profileDetail">
              <span>Musa Abdulkabir</span>
              <span className="location">
                <HiLocationMarker /> USA
              </span>
              <button>Follow</button>
            </div>
          </div>
          <div className="profileContentRight">
            <Link to="">
              <FiMail className="email" />
            </Link>
            <Link>
              <HiDotsVertical className="dots" />
            </Link>
          </div>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Profile;
