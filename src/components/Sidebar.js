import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ExploreIcon from "@mui/icons-material/Explore";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} selected></SidebarRow>
      <SidebarRow title="Trending" Icon={WhatshotIcon}></SidebarRow>
      <SidebarRow title="Explore" Icon={ExploreIcon}></SidebarRow>
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon}></SidebarRow>
      <hr></hr>
      <SidebarRow
        title="Library"
        Icon={LibraryAddCheckOutlinedIcon}
      ></SidebarRow>
      <SidebarRow title="History" Icon={HistoryOutlinedIcon}></SidebarRow>
      <SidebarRow
        title="Watch Later"
        Icon={WatchLaterOutlinedIcon}
      ></SidebarRow>
      <hr></hr>
      <SidebarRow title="Settings" Icon={SettingsIcon}></SidebarRow>
      <SidebarRow title="Help" Icon={HelpOutlineIcon}></SidebarRow>
      <SidebarRow
        title="Send Feedback"
        Icon={FeedbackOutlinedIcon}
      ></SidebarRow>
    </div>
  );
}

export default Sidebar;
