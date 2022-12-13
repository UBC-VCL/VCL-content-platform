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
import VCLIcon from '@statics/images/vcl-icon.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MobileMenu from '@components/MobileNavbar';

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
    let target = event.target as HTMLElement;
    if (target.style.color !== '#4C6199') {
      target.style.color = '#4C6199';
    } else {
      target.style.color = 'black';
    }
  };

  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };

  window.addEventListener('handlePageChange', (event) => {

  });

//projects = useAppSelector(selectProjects)
 
  const renderedLinks = NAV.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';
    const projectsButtonStyle: React.CSSProperties = {
      color: 'black',
	    fontFamily: 'Poppins',
	    fontStyle: 'normal',
	    fontWeight: '600',
	    fontSize: '15px',
	    lineHeight: '22.5px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      paddingBottom: '7px',
      letterSpacing: '-0.4px'
    };

    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
        return (
              <React.Fragment key={REF}>
                <Button
                    id='basic-button'
                    onClick={handleProjectMenuClick}
                    aria-controls={projectOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={projectOpen ? 'true' : undefined}
                    style={projectsButtonStyle}
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
                    <MenuItem onClick={handleProjectMenuClose}>
                                <GenericLink className="all-projects-text" name="All Projects" to={`${ROUTES.PROJECT.BASE}`}/>
                                <hr className="all-projects-underline" />
                    </MenuItem>
                    {
                        CONSTANTS.PROJECTS.map((project, i) => {
                            return (
                                <MenuItem 
                                key={i}
                                onClick={handleProjectMenuClose}>
                                    <GenericLink
                                        className="project-name"
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
        <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar">
          <div className="logo-container">
            <img src={VCLIcon} alt="VCL logo" />
            <p>{TEXT.COMMON.TITLE}</p>
          </div>
          <div className="nav-right">           
            <span className="nav-rendered-links">{renderedLinks}</span>
            <div className="nav-icon-container">
              <IconButton onClick={handleSearchBtnClick}>
                <SearchIcon/>
              </IconButton>
              <IconButton onClick={handleMenuClick}>
                <AccountCircleIcon/>
              </IconButton>
            </div>
          </div>
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
        <MobileMenu/>
    </div>
  );
};

export default Navbar;
