import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonAppBar from './components/layout/ButtonAppBar/ButtonAppBar';
import SideDrawer from './components/layout/SideDrawer/SideDrawer';
import TeamRecords from './components/TeamRecords/TeamRecords';
import axios from 'axios';
import Styles from './App.module.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
      standings: null
    };
  }

  toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ drawerOpen: open });
  };

  render() {
    console.log('[App] render');
    let standings = [];
    if (this.state.standings) {
      standings = this.state.standings['premier-league'].standings;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={Styles.App}>
          <ButtonAppBar toggleDrawer={this.toggleDrawer}></ButtonAppBar>
          <SideDrawer
            toggleDrawer={this.toggleDrawer}
            open={this.state.drawerOpen}>
          </SideDrawer>
          <TeamRecords standings={standings}></TeamRecords>

        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log('[App] componentDidMount');

    axios
      .get('https://nekdev.herokuapp.com/api/standings/get')
      .then((response) => {
        this.setState({
          standings: response.data.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

export default App;
