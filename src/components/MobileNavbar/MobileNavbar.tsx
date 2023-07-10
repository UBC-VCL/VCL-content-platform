import React from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { TEXT, CONSTANTS} from '@statics';
import { useHandleLogout } from '@services/authService';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { appActions } from '@redux/slices/AppRedux';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MobileNavbar.css';
import {ReactComponent as SearchIcon} from '@statics/images/search-icon.svg';
import VCLIcon from '@statics/images/new-vcl-icon.png';
import { slide as MobileMenu } from 'react-burger-menu';

const MobileNavbar = () => {

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
    const handleSearchButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // todo
    };

    return (
        <div className="container">
        <AppBar position="fixed" className="mobile-header">
            <div>
            <img src={VCLIcon} alt="VCL logo" className="mobile-vcl-logo"/>
            <div className="title">{TEXT.COMMON.TITLE}</div>
            </div>
            <div className="row">
                <div>
                <IconButton onClick={handleSearchButtonClick}>
                    <SearchIcon/>
                </IconButton>
                </div>
                <MobileMenu>
                <a className="menu-item" href="/">
                    {TEXT.PAGE_TITLES.HOME}
                </a>
                <a className="menu-item" href="/timeline">
                    {TEXT.PAGE_TITLES.TIMELINE}
                </a>
                <a className="menu-item" href="/projects">
                    {TEXT.PAGE_TITLES.PROJECTS}
                </a>
                <a className="menu-item" href="/resources">
                    {TEXT.PAGE_TITLES.RESOURCES}
                </a>
                <a className="menu-item" href="/join">
                    {TEXT.PAGE_TITLES.GET_INVOLVED}
                </a>
                </MobileMenu>
                <div className="account-icon-wrapper">
                <IconButton onClick={handleMenuClick}>
                    <AccountCircleIcon/>
                </IconButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                'aria-labelledby': 'menu-button',
                }}>
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
}

export default MobileNavbar;