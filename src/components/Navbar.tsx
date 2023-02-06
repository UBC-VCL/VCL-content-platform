import React from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import { NAV, TEXT, CONSTANTS, ROUTES } from "@/statics";
import SearchIcon from "@/statics/images/search-icon.svg";
import VCLIcon from "@/statics/images/vcl-icon.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MobileMenu from "@/components/MobileNavbar";
import Link from "next/link";
import { useAuthStore } from "stores/AuthStore";
import { useAppStore } from "stores/AppStore";

const Navbar: React.FC<{}> = () => {
  const logout = useAuthStore((state) => state.logout);
  const openModal = useAppStore((state) => state.openModal);

  const isLoggedIn = useAuthStore((state) => !!state.refresh_token);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    openModal({
      key: CONSTANTS.MODALS.LOGIN,
    })

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

  return (
    <div className="nav">
      <div className="navbar-menu">
        <AppBar position="sticky" className="nav-appbar">
          <Toolbar className="nav-toolbar">
            <Link href="/" className="logo-container">
              <Image height={20} width={20} src={VCLIcon} alt="Search" />
              <p>{TEXT.COMMON.TITLE}</p>
            </Link>
            <div className="nav-right">
              <span className="nav-rendered-links">
                <RenderedLinks />
              </span>
              <div className="nav-icon-container">
                <IconButton onClick={handleSearchBtnClick}>
                  <Image height={20} width={20} src={SearchIcon} alt="Search" />
                </IconButton>
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
        </AppBar>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;

const RenderedLinks: React.FC<{}> = () => {
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

  const router = useRouter();
  const navItems = NAV.map((item) => ({ title: item.TITLE, ref: item.REF }));
  return (
    <>
      {navItems.map((item) => {
        const { title, ref } = item;
        let active = ref === router.pathname ? "active" : "";
        if (title === TEXT.PAGE_TITLES.PROJECTS) {
          active = router.pathname.includes(ref) ? "active" : "";
        }
        if (title === TEXT.PAGE_TITLES.PROJECTS) {
          return (
            <React.Fragment key={ref}>
              <button
                className={`nav-link link-style ${active}`}
                id="basic-button"
                onClick={handleProjectMenuClick}
              >
                {TEXT.PAGE_TITLES.PROJECTS}
              </button>
              <Menu
                id="basic-menu"
                anchorEl={projectAnchorEl}
                open={projectOpen}
                onClose={handleProjectMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleProjectMenuClose}>
                  <Link
                    href={ROUTES.PROJECT.BASE}
                    className="all-projects-text"
                  >
                    All Projects
                  </Link>
                  <hr className="all-projects-underline" />
                </MenuItem>
                {CONSTANTS.PROJECTS.map((project, i) => {
                  return (
                    <MenuItem key={i} onClick={handleProjectMenuClose}>
                      <Link
                        href={`${
                          ROUTES.PROJECT.BASE
                        }/${project.name.toLowerCase()}`}
                        className={`nav-link project-name ${
                          router.pathname.split("/")[2] === project.name
                            ? "active"
                            : ""
                        }`}
                      >
                        {project.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </React.Fragment>
          );
        } else {
          return (
            <Link key={ref} href={ref} className={`nav-link ${active}`}>
              {title}
            </Link>
          );
        }
      })}
    </>
  );
};
