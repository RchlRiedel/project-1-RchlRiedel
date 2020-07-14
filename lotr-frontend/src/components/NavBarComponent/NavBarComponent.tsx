import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBarComponent:FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true); //is this working?
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

//   const handleChange = (event:any) => {
//     setAuth(event.target.checked);
//   };

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let menuItems = []
  let profileMenuItems = []

//   menuItems.push(<MenuItem onClick={handleClose}><Link to= "/login">Login</Link></MenuItem>)

  if(props.user){
    menuItems.push(
        <MenuItem onClick={handleClose}><Link to='/all-users'>Meet The Fellowship</Link></MenuItem>,
        <MenuItem onClick={handleClose}><Link to = '/'>Log Out</Link></MenuItem>
    )

    profileMenuItems.push(
        <MenuItem onClick={handleClose}><Link to='/profile'>User Profile</Link></MenuItem>,
        <MenuItem onClick={handleClose}><Link to = '/account'>Account Details</Link></MenuItem>
    )
  }
//    if(props.user && props.user.role === 'Admin'){
    return (
        <nav>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Menu id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}> 
            {menuItems}
            </Menu>
          <Typography variant="h6" className={classes.title}>
            The Fellowship of the Ring
          </Typography>
          {auth && (
            <div>
              <IconButton onClick= {handleClick}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                {profileMenuItems}
              </Menu>
            </div>
        )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}