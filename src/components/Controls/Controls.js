import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => (
    <div className={classes.app__controls}>
        <button className={classes.app__controls_btn} onClick={props.decrement}>-</button>
        <button className={classes.app__controls_btn} onClick={props.increment}>+</button>
        <button className={classes.app__controls_btn_save} onClick={props.saveCounter}>save</button>
    </div>
);

export default Controls;
