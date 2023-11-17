import React from "react";
import { AppBar, IconButton, Menu, MenuItem } from "@mui/material";
import { TEXT, CONSTANTS } from "@statics";
import { useHandleLogout } from "@services/authService";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { appActions } from "@redux/slices/AppRedux";
import { selectIsLoggedIn } from "@redux/slices/AuthRedux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./MobileNavbar.css";
import { ReactComponent as SearchIcon } from "@statics/images/search-icon.svg";
import VCLIcon from "@statics/images/vcl-logo-2023.png";
import NAV from "@statics/nav";
import { Drawer, styled } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";

// Component that allows the dropdown menu to appear from the top of the screen and gives it
// the transition animation
const DropdownMenu = styled(Drawer)`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavbar = () => {
  const { logout } = useHandleLogout();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // State of the dropdown menu, when true menu is open, false menu is closed
  const [open, setOpen] = React.useState(false);

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

  const closeDropdown = () => {
    setOpen(false);
  };

  // search button
  const handleSearchButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // todo
  };

  return (
    <div className="container">
      <AppBar position="fixed" className="mobile-header">
        <div>
          <img src={VCLIcon} alt="VCL logo" className="mobile-vcl-logo" />
          <div className="title">{TEXT.COMMON.TITLE}</div>
        </div>
        <div className="row">
          <div>
            <IconButton onClick={handleSearchButtonClick}>
              <SearchIcon />
            </IconButton>
          </div>
          <GiHamburgerMenu
            size={35}
            color={"black"}
            onClick={() => {
              setOpen(true);
            }}
          ></GiHamburgerMenu>
          <DropdownMenu anchor="top" open={open} onClose={closeDropdown}>
            <div className="mobile-menu-container">
              {NAV.map((item, index) => {
                return (
                  <div
                    className="menu-item"
                    key={index}
                    onClick={() => {
                      history.push(item.REF!)
                      closeDropdown()
                    }}
                  >
                    {item.TITLE}
                  </div>
                );
              })}
            </div>
          </DropdownMenu>
          <div className="account-icon-wrapper">
            <IconButton onClick={handleMenuClick}>
              <AccountCircleIcon />
            </IconButton>
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
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default MobileNavbar;
