import "./List.css";
// import {
//   MdRssFeed,
//   MdOutlineChat,
//   MdOutlineVideocam,
//   MdGroup,
//   MdBookmarks,
//   MdOutlineQuestionMark,
//   MdOutlineShoppingBag,
// } from "react-icons/md";

const List = ({text,icon}) => {
  return (
    <li className="leftBarFriend">
        {icon}
      <span className="sidebarFriendName">{text}</span>
    </li>
  );
};

export default List;
