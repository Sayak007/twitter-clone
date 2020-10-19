import React from "react";
import "./css/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { render } from "react-dom";
import Fire from "./firebase";

class Sidebar extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {style: window.innerWidth<=768 ? "none":"block"};
  }
  updateDimensions = () => {
    this.setState({ style: window.innerWidth<=768 ? "none":"block" });
  };
  componentDidMount(){
    window.addEventListener(
      'resize',this.updateDimensions
    );
  }

  logout() {
    Fire.auth().signOut();
  }

  render(){
    return (
        <div className="sidebar" style={{display:this.state.style}}>;
        <TwitterIcon className="sidebar__twitterIcon" />

        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>

        <Button variant="outlined" className="sidebar__tweet" onClick={this.logout} fullWidth>
          Sign Out
        </Button>
      </div>
    );
  }
}

export default Sidebar;
