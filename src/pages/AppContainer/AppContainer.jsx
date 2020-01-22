import React from 'react';
import IngredientContainer from '../../components/IngredientContainer/IngredientContainer';
import './AppContainer.css';

const AppContainer = (props) => {
  return (
    <div className="AppContainer">
      <h2>this is the Appcontainer</h2>
      
      <IngredientContainer
        ingredients= {props.ingredients}
      />
    </div>
  );

};

export default AppContainer;