import React, { useCallback, useEffect, useState, useRef } from "react";
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
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import IconBurger from './Images/icon-burger';

const styles = StyleSheet.create({
  burgerIcon: {
      cursor: 'pointer',
      position: 'absolute',
      left: 24,
      top: 34,
      zIndex:1000,
  },
  container: {
      backgroundColor: '#fff',
      width: "fit-content",
      paddingTop: 32,
      height: 'calc(100% - 32px)'
  },
  containerMobile: {
      transition: 'left 0.5s, right 0.5s',
      position: 'absolute',
      width: 255,
      height: 'calc(100%)',
      zIndex: 901,
  },
  mainContainer: {
      height: '100%',
      minHeight: '100vh'
  },
  mainContainerMobile: {
      position: 'absolute',
      top: 0,
      left: 0
  },
  mainContainerExpanded: {
      width: '100%',
      minWidth: '100vh'
  },
  menuItemList: {
  },
  outsideLayer: {
      position: 'absolute',
      width: '100vw',
      minWidth: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.50)',
      zIndex: 900
  },
  separator: {
  },
  hide: {
      left: -300
  },
  show: {
      left: 0
  }
});

function Sidebar({ onChange, selectedItem })  {

    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const input1 = useRef(null);

    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        forceUpdate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth]);

    const toggleMenu = () => setExpanded(!expanded);

    const renderBurger = () => {
        return (
            <div onClick={toggleMenu} className={css(styles.burgerIcon)}>
                <IconBurger />
            </div>
        );
    };

  const logout=()=> {
    Fire.auth().signOut();
  }

  const onItemClicked = item => {
    //setExpanded(false);
    return onChange(item);
  };

    return (
        <div className="sidebar" style={{ position: 'relative' }} >;
          <Row componentRef={element => (input1.current = element)} className={css(styles.mainContainer)} breakpoints={{768: css(styles.mainContainerMobile,expanded && styles.mainContainerExpanded)}}>
            {isMobile && !expanded && renderBurger()}
            <Column className={css(styles.container)} breakpoints={{768: css(styles.containerMobile,expanded ? styles.show : styles.hide)}}>
              <TwitterIcon className="sidebar__twitterIcon" />

              <SidebarOption Icon={HomeIcon} text="Home" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={SearchIcon} text="Explore" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={MailOutlineIcon} text="Messages" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={ListAltIcon} text="Lists" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />
              <SidebarOption Icon={PermIdentityIcon} text="Profile" onClick={() => onItemClicked('Profile')} active={selectedItem === 'Profile'} />
              <SidebarOption Icon={MoreHorizIcon} text="More" onClick={() => onItemClicked('Home')} active={selectedItem === 'Home'} />

              {/* Button -> Tweet */}
              <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
              </Button>

              <Button variant="outlined" className="sidebar__tweet" onClick={logout} fullWidth>
                Sign Out
              </Button>
              </Column>
                {isMobile && expanded && (
                    <div
                        className={css(styles.outsideLayer)}
                        onClick={toggleMenu}
                    ></div>
                )}
            </Row>
      </div>
    );
}

export default Sidebar;
