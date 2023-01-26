import React from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import { TEXT, CONSTANTS, NAV} from '@/statics';
import { useHandleLogout } from '@/services/authService';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { appActions } from '@/redux/slices/AppRedux';
import { selectIsLoggedIn } from '@/redux/slices/AuthRedux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@/statics/images/search-icon.svg';
import VCLIcon from '@/statics/images/vcl-icon2.svg';
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

    const navItems = NAV.map((item) => ({title: item.TITLE, ref: item.REF}));

    return (
        <div className="container">
        <AppBar position="fixed" className="mobile-header">
            <div>
                <Image height={20} width={20} src={VCLIcon} alt="Search" />
            <div className="title">{TEXT.COMMON.TITLE}</div>
            </div>
            <div className="row">
                <div>
                <IconButton onClick={handleSearchButtonClick}>
                    <Image height={20} width={20} src={SearchIcon} alt="Search" />
                </IconButton>
                </div>
                <MobileMenu>
                    {navItems.map((item) => {
                        const {title, ref} = item;
                        return (
                            <Link
                            key={ref} 
                            href={ref} 
                            className="menu-item"
                        >
                            {title}
                        </Link>
                        )
                    })}
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