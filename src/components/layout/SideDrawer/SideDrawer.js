import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import Styles from './SideDrawer.module.scss';

class SideDrawer extends Component {

  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.toggleDrawer(false)}>
        <div
          className={Styles.List}
          role="presentation"
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <List>

            <ListItem selected button key="Premier League">
              <ListItemText primary="Premier League" />
            </ListItem>
            <ListItem button key="Bundesliga">
              <ListItemText primary="Bundesliga" />
            </ListItem>
            <ListItem button key="Primera Division">
              <ListItemText primary="Primera Division" />
            </ListItem>

          </List>

        </div>
      </Drawer>
    );
  }
}

export default SideDrawer;
