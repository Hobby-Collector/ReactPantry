import React from 'react';
import './AppContainer.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const AppContainer = (props) => {
  let ingreds = props.ingredients.filter(ingredient => ingredient.owner === props.user._id);
  let titleString = ingreds.length ? "here are your ingredients!" : "looks like you don't have any ingredients yet! Add one up top!"
  ingreds = ingreds.sort((a, b) => { return parseInt(a.expiration) - parseInt(b.expiration) });
  ingreds = ingreds.map(ingredient => {
    let newIngredient = ingredient;
    newIngredient.expiration = new Date(Date.parse(ingredient.expiration))
    return newIngredient;
  });


  ingreds = ingreds.map((ingredient, idx) => {
    let style = parseInt(ingredient.expiration) > parseInt(Date.now()) ? { BackgroundColor: 'Beige' } : { BackgroundColor: 'Red' }
    console.log("ingredient ", ingredient, " style ", style);
    return (
      <Card className='Card' style={style} key={idx} idx={idx} >
        <CardContent>
          <Typography variant="h4" component="h2" className="title">
            {ingredient.name}
          </Typography>
          <Typography variant="body2" component="p">
            Description: {ingredient.description}
          </Typography>
          <Typography variant="body2" component="p">
            Expiration: {ingredient.expiration.toDateString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
            onClick={() => props.handleDeleteIngredient(ingredient._id)}
          >
            remove
      </Button>
          <Link
            className='btn btn-xs btn-warning'
            to={{
              pathname: '/edit',
              state: { ingredient }
            }}
          >
            EDIT
    </Link>
        </CardActions>
      </Card>
    )
  });

  return (
    <div className="AppContainer">
      <h1>{titleString}</h1>
      {ingreds}
    </div >
  );
};

export default AppContainer;