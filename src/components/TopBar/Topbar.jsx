import "./Topbar.css";
import {
  MdHome,
  MdOutlineGridView,
  MdOutlineSearch,
  MdPerson2,
  MdOutlineEmail,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLeftWrapper">
          <span className="logo">Janermsocial</span>
          <MdHome className="topIcon" />
          <RiMoonLine className="topIcon" />
          <MdOutlineGridView className="topIcon" />
          <div className="search-box">
            <MdOutlineSearch className="search-btn" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className="topbarCenter"></div>
      <div className="topbarRight">
        <MdPerson2 className="topIcon" />
        <MdOutlineEmail className="topIcon" />
        <MdOutlineNotificationsNone className="topIcon" />
        <div className="profile">
          <img
            src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="User"
          />
          <span className="username">John Smilga</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
