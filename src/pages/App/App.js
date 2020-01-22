import React, { Component } from 'react';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AppContainer from '../AppContainer/AppContainer';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';

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
        <NavBar
        user={this.state.user}
        handleLogout={this.handleLogout}
      />
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/' render={() =>
            userService.getUser() ?
              <AppContainer
                user={this.state.user}
                handleLogout={this.handleLogout}
                ingredients={this.state.ingredients}
              /> :
              <WelcomePage />
              
          } />
        </Switch>
      </div>
    )
  }
}

export default App;
