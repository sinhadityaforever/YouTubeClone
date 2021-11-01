import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
//rfce
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="Yt logo"
        ></img>
      </div>
      <div className='header__input'>
        <input placeholder='Search' type="text"></input>
        <SearchIcon className='header__inputButton'></SearchIcon>
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon'></VideoCallIcon>
        <AppsIcon className='header__icon'></AppsIcon>
        <NotificationsIcon className='header__icon'></NotificationsIcon>
        <AccountCircleIcon className='header__icon'></AccountCircleIcon>
      </div>
    </div>
  );
}

export default Header;
