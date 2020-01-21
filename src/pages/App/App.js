import React, { Component } from 'react';
import userService from '../../utils/userService';
import AppContainer from '../../components/AppContainer/AppContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      ingredients: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() =>
          <AppContainer
            user={this.state.user}
            handleLogout={this.handleLogout}
            ingredients={this.state.ingredients}
          />
        } />
      </div>
    )
  }
}

export default App;
