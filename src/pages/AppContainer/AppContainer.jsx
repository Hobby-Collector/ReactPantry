import React from 'react';
import './AppContainer.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const AppContainer = (props) => {
  console.log(props);
  let ingreds = props.ingredients.filter(ingredient => ingredient.owner === props.user._id);
  let titleString = ingreds.length ? "here are your ingredients!" : "looks like you don't have any ingredients yet! Add one up top!"
  ingreds = ingreds.sort((a,b)=>{return a.expiration-b.expiration});
  return (
    <div className="AppContainer">
      <h1>{titleString}</h1>
      {ingreds.map((ingredient, idx) => (
        <Card className='Card' key={idx} idx={idx} >
          <CardContent>
            <Typography variant="h4" component="h2" className="title">
              {ingredient.name}
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
            <Link
              className='btn btn-xs btn-warning'
              to={{
                pathname: '/edit',
                state: {ingredient}
              }}
            >
              EDIT
        </Link>
          </CardActions>
        </Card>
      ))
      }
    </div >
  );

};

export default AppContainer;