import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { NAV, TEXT, CONSTANTS, ROUTES } from '@statics';
import { useHandleLogout } from '@services/authService';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { appActions } from '@redux/slices/AppRedux';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link';
import './Navbar.css';
import {ReactComponent as SearchIcon} from '@statics/images/search-icon.svg';
import VCLIcon from '@statics/images/new-vcl-icon.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MobileMenu from '@components/MobileNavbar';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

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

  const [projectAnchorEl, setProjectAnchorEl] = React.useState<null | HTMLElement>(null);
  const projectOpen = Boolean(projectAnchorEl)

  // change text color of button to blue when clicked
  const handleProjectMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProjectAnchorEl(event.currentTarget);
  };

  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };

  window.addEventListener('handlePageChange', (event) => {

  });

//projects = useAppSelector(selectProjects)
 
  const renderedLinks = NAV.map(({ TITLE, REF }) => {
    let active = REF === location.pathname ? 'active' : '';
    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
      active = location.pathname.includes(REF) ? 'active' : '';
    }

    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
        return (
              <React.Fragment key={REF}>
                <button className={`nav-link link-style ${active}`}
                id='basic-button'
                onClick={handleProjectMenuClick}
                >{TEXT.PAGE_TITLES.PROJECTS}</button>
                <Menu
                    className="dropdown-menu"
                    id="basic-menu" 
                    anchorEl={projectAnchorEl}
                    open={projectOpen}
                    onClose={handleProjectMenuClose}
                    MenuListProps={{
                        'aria-labelledby' : 'basic-button'
                    }}
                >
                    <MenuItem onClick={handleProjectMenuClose}>
                                <GenericLink className="all-projects-text" name="All Projects" to={`${ROUTES.PROJECT.BASE}`}/>
                                <hr className="all-projects-underline" />
                    </MenuItem>
                    {
                        CONSTANTS.PROJECTS.map((project, i) => { 
                          console.log(location.pathname.split('/')[2], project.name)
                            return (
                                <MenuItem 
                                key={i}
                                onClick={handleProjectMenuClose}>
                                    <GenericLink
                                        className={`nav-link project-name ${location.pathname.split('/')[2] === project.name ? 'active' : ''}`}
                                        name={project.name}
                                        to={`${ROUTES.PROJECT.BASE}/${project.name}`}
                                    />
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
              </React.Fragment>
            )
    } else {
        return (
            <GenericLink 
                key={REF} 
                name={TITLE} 
                to={REF} 
                className={`nav-link ${active}`}
            />
            )
    };
  });

  return (
    <div className="nav">
      <div className="navbar-menu">
        <Toolbar className="nav-toolbar">
          <div className="logo-container">
            <a href={ROUTES.HOME}>
              <img src={VCLIcon} alt="VCL logo" className="vcl-logo"/>
            </a>
            <a href={ROUTES.HOME} className="vcl-title-link">{TEXT.COMMON.LAB_TITLE_ONLY}</a>
          </div>
          <div className="nav-right">           
            <span className="nav-rendered-links">{renderedLinks}</span>
            <div className="nav-icon-container">
              <IconButton onClick={handleSearchBtnClick}>
                <SearchSharpIcon sx={{ color: "black", fontSize: 32, marginRight: 0.5 }}/>
              </IconButton>
              <IconButton onClick={handleMenuClick}>
                <AccountCircleOutlinedIcon sx={{ color: "black", fontSize: 36 }}/>
              </IconButton>
            </div>
          </div>
          <Menu
            id="authentication-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}>
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout}>{TEXT.COMMON.LOGOUT}</MenuItem>
            ) : (
              <MenuItem onClick={handleOpenLoginModal} className="login-button">
                {TEXT.COMMON.LOGIN}
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </div>
        <MobileMenu/>
    </div>
  );
};

export default Navbar;
