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

  {/*EDIT THE LINKS TO LOOK NICE */}

  if(props.user){
    menuItems.push(
        //Logout not working...  
        //<MenuItem onClick={handleClose}><Link to = "/home">Log Out</Link></MenuItem>, //figure out how to make a component for this... different path?
        <Link to={`/profile/${(props.user)?props.user.userId : '0' }`} style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>User Profile</MenuItem></Link>,
        <Link to ={`/update-account/${(props.user)?props.user.userId : '0' }`} style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Edit Account Details</MenuItem></Link>
        //info page?
        )
  } else {
    menuItems.push(
      <Link to= "/home" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Home</MenuItem></Link>,
      <Link to= "/login" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Login</MenuItem></Link>,
      <Link to= "/register" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Sign Up</MenuItem></Link>
    )
  }
//    if(props.user && props.user.role === 'Admin'){ for get all users (if posssible)
    return (
      <nav>
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
              The Fellowship of the Ring Membership
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
  );
}