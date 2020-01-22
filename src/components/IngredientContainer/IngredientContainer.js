import React from 'react';
import './IngredientContainer.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';


const IngredientContainer = (props) => {
    return (
        <div className="IngredientContainer">
            {props.ingredients.map((ingredient, idx) =>
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
            )}
        </div>
    )
}

export default IngredientContainer;