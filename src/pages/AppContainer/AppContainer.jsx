import React from 'react';
import IngredientContainer from '../../components/IngredientContainer/IngredientContainer';
import NavBar from '../../components/NavBar/NavBar';
import './AppContainer.css';

const AppContainer = (props) => {
  return (
    <div className="AppContainer">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <IngredientContainer
        ingredients= {props.ingredients}
      />
    </div>
  );

};

export default AppContainer;