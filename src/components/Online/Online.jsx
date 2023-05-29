import "./Online.css";
import FriendOnline from "../../assets/profile1.avif";

const Online = () => {
  return (
    <li className="onlineFriends">
      <div className="onlineFriendsWrapper">
        <img src={FriendOnline} alt="" />
        <span className="online-sign"></span>
      </div>
      <span className="friendOnlineUsername">Jonas Mendy</span>
    </li>
  );
};

export default Online;
