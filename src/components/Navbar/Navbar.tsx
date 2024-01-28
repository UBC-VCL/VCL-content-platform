import React from "react";
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

  // change text color of button to blue when clicked
  const handleProjectMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setProjectAnchorEl(event.currentTarget);
  };

  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };

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
        namesArray = CONSTANTS.RESOURCES;
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
          <KeyboardArrowDownIcon />
        </div>
        <Menu
          className="dropdown-menu"
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <GenericLink
              className="all-item-text"
              name={"All " + title}
              to={`${baseRoute}`}
            />
            <hr className="all-item-underline" />
          </MenuItem>
          {namesArray.map((menuItem, i) => {
            return (
              <MenuItem key={i} onClick={handleClose}>
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
  });

  return (
    <div className="nav" id="nav">
      <div className="navbar-menu">
        <Toolbar className="nav-toolbar" id="global-nav-bar">
          <div className="logo-container">
            <a href={ROUTES.HOME}>
              <img src={VCLIcon} alt="VCL logo" className="vcl-logo" />
            </a>
            <a href={ROUTES.HOME} className="vcl-title-link">
              {TEXT.COMMON.LAB_TITLE_ONLY}
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
