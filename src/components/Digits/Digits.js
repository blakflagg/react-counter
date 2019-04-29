import React from 'react';
import Digit from './Digit/Digit';
import classes from './Digits.module.css';

const digits = (props) => (
    <div className={classes.app__counter_digits}>
    <Digit counter={props.c1}/>
    <Digit  counter={props.c2} />
    </div>
);

export default digits;