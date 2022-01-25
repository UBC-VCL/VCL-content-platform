import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NAVBAR, TEXT, CONSTANTS } from '@statics';
import { useHandleLogout } from '@services/authService';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { appActions } from '@redux/slices/AppRedux';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';
import { selectProjects } from '@redux/slices/ProjectRedux';
import './Navbar.css';

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

  const [projectAnchorEl, setProjectAnchorEl] = React.useState<null | HTMLElement>(null);
  const projectOpen = Boolean(projectAnchorEl)

  const handleProjectMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProjectAnchorEl(event.currentTarget);
  };
  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };

  const projects = useAppSelector(selectProjects)

  const renderedLinks = NAVBAR.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';

    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
        return (
              <React.Fragment key={REF}>
                <Button
                    id='basic-button'
                    onClick={handleProjectMenuClick}
                    aria-controls={projectOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={projectOpen ? 'true' : undefined}
                    style={{textTransform: "none"}}
                >
                    {TEXT.PAGE_TITLES.PROJECTS} 
                </Button>
                <Menu
                    id="basic-menu" 
                    anchorEl={projectAnchorEl}
                    open={projectOpen}
                    onClose={handleProjectMenuClose}
                    MenuListProps={{
                        'aria-labelledby' : 'basic-button'
                    }}
                >
                <MenuItem onClick={handleProjectMenuClose} component={Link} to={`/${TITLE}/overview`}>
                    Overview
                </MenuItem>
                {
                    projects.map((e, i) => {
                        return <MenuItem 
                        key={i}
                        onClick={handleProjectMenuClose}
                        component={Link}
                        to={`/${TITLE}/${e.name}`}>
                            {e.name}
                        </MenuItem>
                    })
                }

                </Menu>
              </React.Fragment>
            )
    } else {
        return (
              <React.Fragment key={REF}>
                <Link className={`nav-link ${active}`} to={REF}>
                  {TITLE}
                </Link>
              </React.Fragment>
            )
    };
  });

  return (
    <div>
      <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar">
          <Typography className="nav-title">{TEXT.COMMON.TITLE}</Typography>
          <span className="nav-rendered-links">{renderedLinks}</span>
          <IconButton onClick={handleMenuClick}>
            <AccountCircleIcon />
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
