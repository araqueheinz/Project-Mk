// Import React
import React from 'react';

// Import the link component from react-router-dom 
import { Link } from 'react-router-dom';

// Import m GoogleAuth component
import GoogleAuth from './GoogleAuth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome
            <Link style={{ color: "white" ,marginLeft: 10, }} to="/contact">Contact Form</Link>
            <Link style={{ color: "white", marginLeft: 10, }} to="/">Home</Link>
        </Typography>
            <GoogleAuth/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;


const useStyles = makeStyles(theme => ({
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