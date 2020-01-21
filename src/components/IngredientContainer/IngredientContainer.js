import React from 'react';
import './IngredientContainer.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const IngredientContainer = (props) => {
    return (
        <div className="IngredientContainer">
            {props.Ingredients.map((Ingredient, idx) =>
                <Card className='Card' key={idx} idx={idx}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Name: {Ingredient.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Description: {Ingredient.description}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default IngredientContainer;