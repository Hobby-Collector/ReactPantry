import React from 'react';
import './AppContainer.css';
import { Card, CardActions } from 'material-ui';
import { CardContent, Button } from '@material-ui/core';
import Typography from 'material-ui/styles/typography';

const AppContainer = (props) => {
  console.log("PROPS ING ", props.ingredients)
  return (
    <div className="AppContainer">
      <h1>this is the app container</h1>
      {props.ingredients.map((ingredient, idx) => {
        return (
          <Card className='Card' key={idx} idx={idx}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Name: {ingredient.name}
            </Typography>
            <Typography variant="body2" component="p">
              Description: {ingredient.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">remove</Button>
          </CardActions>
        </Card>
        )
      }
        
        
        
      )}
    </div>
  );

};

export default AppContainer;