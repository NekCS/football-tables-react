import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Styles from './ButtonAppBar.module.scss';



const ButtonAppBar = (props) => {

  return (
    <AppBar className={Styles.AppBar} position="fixed">
      <Toolbar>
        <IconButton onClick={props.toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Premier League</Typography>
      </Toolbar>
    </AppBar>

  );
}

export default ButtonAppBar;