import React, { Component } from 'react';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AppContainer from '../AppContainer/AppContainer';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ingredientService from '../../services/Ingredients-api';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      ingredients: []
    };
  }

  // Api reference methods
  handleAddIngredient = async newIngredientData => {
    newIngredientData.owner = this.state.user._id;
    const newIngredient = await ingredientService.create(newIngredientData);
    this.setState(async (state) => await ({
      ingredients: [...state.ingredients, newIngredient]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
  }

  handleUpdateIngredient = async updatedIngredientData => {
    const updatedIngredient = await ingredientService.update(updatedIngredientData);
    const newIngredientArray = this.state.ingredients.map(p =>
      p._id === updatedIngredient._id ? updatedIngredient : p
    );
    this.setState(
      { ingredients: newIngredientArray },
      () => this.props.history.push('/')
    );
  }

  handleDeleteIngredient = async id => {
    await ingredientService.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      ingredients: state.ingredients.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }


  //login and out methods
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    let ingreds = await ingredientService.getAll()
    let ingredients = await ingreds;
    setTimeout(() => console.log("middle of component did mount ingredients before this.setState", ingredients), 1000)
    this.setState({ingredients: ingredients });
    console.log("bottom of component did mount this.state", this.state)
  }

  render() {
    console.log("top of render ", this.state.ingredients)
    return (
      <MuiThemeProvider>
        <div style={{ width: '98%', height: '100%' }}>
          {/* nav bar */}
          <NavBar handleAddIngredient={this.handleAddIngredient} user={this.state.user} handleLogout={this.handleLogout} />
          {/* body */}
          <Paper elevation={3} style={{ width: '98%', height: '100%' }}>
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
                userService.getUser()?
                  <AppContainer
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    ingredients={this.state.ingredients}
                    handleDeleteIngredient={this.handleDeleteIngredient}
                  /> :
                  <WelcomePage />
              } />
              } />
            </Switch>
          </Paper>
        </div >
      </MuiThemeProvider>
    )
  }
}

export default App;
