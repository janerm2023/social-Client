import "./Leftbar.css";
import {
  MdGroup,
  MdOutlinePlace,
  MdWatch,
  MdMemory,
  MdOutlineEventSeat,
  MdOutlineMessage,
  MdOutlineGolfCourse,
} from "react-icons/md";

import { FaUserFriends, FaGamepad, FaVideo } from "react-icons/fa";
import { HiUserCircle, HiReceiptRefund } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { SiFuturelearn } from "react-icons/si";
import List from "../Lists/List";

const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <div className="sideBarListTop">
          <List text="John Smith" icon={<HiUserCircle />} />
          <List text="Friends" icon={<FaUserFriends />} />
          <List text="Groups" icon={<MdGroup />} />
          <List text="Marketplace" icon={<MdOutlinePlace />} />
          <List text="watch" icon={<MdWatch />} />
          <List text="Memories" icon={<MdMemory />} />
        </div>
        <hr />
        <div className="sideBarListTop">
          <h3>Your shortcuts</h3>
          <List text="Events" icon={<MdOutlineEventSeat />} />
          <List text="Gaming" icon={<FaGamepad />} />
          <List text="Gallery" icon={<GrGallery />} />
          <List text="Videos" icon={<FaVideo />} />
          <List text="Messages" icon={<MdOutlineMessage />} />
        </div>
        <hr />
        <div className="sideBarListTop">
          <h3>Others</h3>
          <List text="Fundraiser" icon={<HiReceiptRefund />} />
          <List text="Tutorials" icon={<SiFuturelearn />} />
          <List text="Courses" icon={<MdOutlineGolfCourse />} />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
