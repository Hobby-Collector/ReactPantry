import React from 'react';
import { Route, Link } from 'react-router-dom';
import './NavBar.css';
import { Box } from '@material-ui/core';
import AddIngredient from '../AddIngredient/AddIngredient';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '100%', height: '5rem' }}
            >

                <Link to=''
                    className='NavBar-link'
                    onClick={props.handleLogout}
                >LOG OUT
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/add'>New Ingredient</Link>

                <Route exact path='/add' render={() =>
                    <AddIngredient
                        handleAddIngredient={props.handleAddIngredient}
                        owner= {props.user._id}
                    />
                } />
            </Box>
        </div>
        :
        <div className='NavBar'>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '98%', height: '5rem' }}
            >
                <Link to='/login' className='NavBar-link'>LOG IN</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            </Box>
        </div >;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;
