import React from 'react';
import classes from './Digit.module.css';

const digit = (props) => (
    <div className={classes.app__digit}>
        <h1>{props.counter}</h1>        
    </div>
)

export default digit;
