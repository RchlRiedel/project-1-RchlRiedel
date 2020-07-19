import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({ //change color too
  root: {
    flexGrow: 1,
    background: green[900]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Bookman Old Style"
  },
}));

export const NavBarComponent:FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let menuItems = []

  {/*EDIT THE LINKS TO LOOK NICE */}
  menuItems.push(<Link to= "/home" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Home</MenuItem></Link>)
  

  if(props.user!=null){ //want this to switch back when logged off
    menuItems.push(
        <Link to={`/user/profile/${(props.user)?props.user.userId : '0' }`} style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>User Profile</MenuItem></Link>,
        <Link to ={`/user/update/${(props.user)?props.user.userId : '0' }`} style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Edit Account Details</MenuItem></Link>,
        <Link to="/logout" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Logout</MenuItem></Link>)
        //info page?    
  } else {
    menuItems.push(
      <Link to= "/login" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Login</MenuItem></Link>,
      <Link to= "/register" style={{ textDecoration:"none"}}><MenuItem onClick={handleClose}>Sign Up</MenuItem></Link>
  )
  }
//    if(props.user && props.user.role === 'Admin'){ for get all users (if posssible)
    return (
      <nav>
        <AppBar position="static" className={classes.root}>
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