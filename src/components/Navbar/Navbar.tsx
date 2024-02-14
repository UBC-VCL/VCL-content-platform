import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { NAV, TEXT, CONSTANTS, ROUTES } from "@statics";
import RESOURCES from "@statics/resources";
import { useHandleLogout } from "@services/authService";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { appActions } from "@redux/slices/AppRedux";
import { selectIsLoggedIn } from "@redux/slices/AuthRedux";
import { selectProjects } from "@redux/slices/ProjectRedux";
import GenericLink from "@components/generics/Link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";
import { ReactComponent as SearchIcon } from "@statics/images/search-icon.svg";
import VCLIcon from "@statics/images/vcl-logo-2023.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MobileMenu from "@components/MobileNavbar";
require("dotenv").config();

const IS_WIP = process.env.REACT_APP_WIP === "development";

const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const { logout } = useHandleLogout();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    dispatch(
      appActions.openModal({
        key: CONSTANTS.MODALS.LOGIN,
      })
    );

    handleMenuClose();
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  // search button
  const handleSearchBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // todo
  };

  const [projectAnchorEl, setProjectAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const projectOpen = Boolean(projectAnchorEl);

  const handleProjectMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setProjectAnchorEl(event.currentTarget);
  };

  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };


  //projects = useAppSelector(selectProjects)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
      console.log(window.innerWidth)
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount


  const renderedLinks = NAV.map(({ TITLE, REF }) => {
    let active = REF === location.pathname ? "active" : "";
    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {

  const [resourceAnchorEl, setResourceAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const resourceOpen = Boolean(resourceAnchorEl);

  const handleResourceMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setResourceAnchorEl(event.currentTarget);
  };

  const handleResourceMenuClose = () => {
    setResourceAnchorEl(null);
  };

  window.addEventListener("handlePageChange", (event) => {});

  // type definition for handleClose
  type OnCloseHandler = () => void;

  //projects = useAppSelector(selectProjects)

  // dynamically determines dropdown menu width on open and maintains that initial width when hovering menu items
  //    child elements with transition events will pass those up. to prevent this, child elements with transitions 
  //    call stopTransitionEventPropagation()
  const setMenuSizeAfterTransition = () => {
    const menuContainerPaper: HTMLDivElement | null | undefined = document.getElementById("basic-menu")?.querySelector(".MuiList-root");
    if (menuContainerPaper && !menuContainerPaper.style.width || menuContainerPaper?.style.width === "calc(100% + 0px)") {
      menuContainerPaper.style.width = menuContainerPaper.getBoundingClientRect().width.toString() + "px";
      const els = document.getElementsByClassName("item-hoverable");
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove("no-hover");
      }
    }
  }

  // prevents menu items with hover transformations from running before dropdown fully opens
  const setNoHover = () => {
    const els = document.getElementsByClassName("item-hoverable");
    for (let i = 0; i < els.length; i++) {
      els[i].classList.add("no-hover");
    }
  }

  const stopTransitionEventPropagation = (e: React.TransitionEvent) => {
    e.stopPropagation();
  }

  // component for nav links that have dropdown menu
  const linkWithMenu = (
    active: string,
    ref: string,
    handleClose: OnCloseHandler,
    handleOpen: React.MouseEventHandler<HTMLButtonElement>,
    menuOpen: boolean,
    anchorEl: HTMLElement | null
  ) => {
    let title: string;
    let baseRoute: string;
    let namesArray;
    switch (ref) {
      case ROUTES.PROJECT.BASE:
        title = TEXT.PAGE_TITLES.PROJECTS;
        baseRoute = ROUTES.PROJECT.BASE;
        namesArray = CONSTANTS.PROJECTS;
        break;
      default:
        title = TEXT.PAGE_TITLES.RESOURCES;
        baseRoute = ROUTES.RESOURCES!.BASE;
        namesArray = RESOURCES.CONTENT;
    }

    return (
      <React.Fragment key={ref}>
        <div className="nav-link-container">
          <button
            className={`nav-link link-style ${active}`}
            id="basic-button"
            onClick={handleOpen}
          >
            {title}
          </button>
          <KeyboardArrowDownIcon className={`nav-link ${active}`} />
        </div>
        <Menu
          className="dropdown-menu"
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          onTransitionEnd={setMenuSizeAfterTransition}
          onTransitionEnter={setNoHover}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className="item-hoverable" onClick={handleClose} onTransitionEnd={stopTransitionEventPropagation}>
            <GenericLink
              className="all-item-text"
              name={"All " + title}
              to={`${baseRoute}`}
            />
            <hr className="all-item-underline" />
          </MenuItem>
          {namesArray.map((menuItem, i) => {
            return (
              <MenuItem className="menu-item item-hoverable" key={i} onClick={handleClose} onTransitionEnd={stopTransitionEventPropagation}>
                <GenericLink
                  className={`nav-link item-name ${
                    location.pathname.split("/")[2] === menuItem.name
                      ? "active"
                      : ""
                  }`}
                  name={menuItem.name}
                  to={`${baseRoute}/${menuItem.name}`}
                />
              </MenuItem>
            );
          })}
        </Menu>
      </React.Fragment>
    );
  };

  const renderedLinks = NAV.map(({ TITLE, REF }) => {
    let active = REF === location.pathname ? "active" : "";
    if (
      TITLE === TEXT.PAGE_TITLES.PROJECTS ||
      TITLE === TEXT.PAGE_TITLES.RESOURCES
    ) {
      active = location.pathname.includes(REF) ? "active" : "";
    }

    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
      return linkWithMenu(
        active,
        REF,
        handleProjectMenuClose,
        handleProjectMenuClick,
        projectOpen,
        projectAnchorEl
      );
    } else if (TITLE === TEXT.PAGE_TITLES.RESOURCES) {
      return linkWithMenu(
        active,
        REF,
        handleResourceMenuClose,
        handleResourceMenuOpen,
        resourceOpen,
        resourceAnchorEl
      );
    } else {
      return (
        <GenericLink
          key={REF}
          name={TITLE}
          to={REF!}
          className={`nav-link ${active}`}
        />
      );
    }
  })
  ;

  return (
    <div className="nav" id="nav">
      <div className="navbar-menu" id="global-nav-bar">
        <Toolbar className="nav-toolbar" >
          <div className="logo-container">
            <a href={ROUTES.HOME} style={{width:"fit-content"}}>
              <img src={VCLIcon} alt="VCL logo" className="vcl-logo" />
            </a>
            <a href={ROUTES.HOME} className="vcl-title-link">
              {(!IS_WIP || (windowSize >= 820)) && TEXT.COMMON.LAB_TITLE_ONLY}
            </a>
          </div>
          <div className="nav-right">
            <span className="nav-rendered-links">{renderedLinks}</span>
            <div className="nav-icon-container">
              {IS_WIP && (
                <IconButton onClick={handleSearchBtnClick}>
                  <SearchIcon />
                </IconButton>
              )}
              <IconButton onClick={handleMenuClick}>
                <AccountCircleIcon />
              </IconButton>
            </div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
          >
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout}>{TEXT.COMMON.LOGOUT}</MenuItem>
            ) : (
              <MenuItem onClick={handleOpenLoginModal}>
                {TEXT.COMMON.LOGIN}
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;
