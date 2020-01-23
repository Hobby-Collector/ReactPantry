import React from 'react';
import './AppContainer.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const AppContainer = (props) => {
  let titleString  = props.ingredients.length ? "here are your ingredients!" : "looks like you don't have any ingredients yet! Add one up top!"
  return (
    <div className="AppContainer">
      <h1>{titleString}</h1>
      {props.ingredients.map((ingredient, idx) => (
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
          <Button size="small"
            onClick={() => props.handleDeleteIngredient(ingredient._id)}
          >
            remove
          </Button>
        </CardActions>
      </Card>
      ))}
    </div>
  );

};

export default AppContainer;