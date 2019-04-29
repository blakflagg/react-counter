import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Digits from '../../components/Digits/Digits';
import Controls from '../../components/Controls/Controls';
import classes from './Counter.module.css';

class Counter extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <Aux >
                <div className={classes.app__counter} >
                    <h1 className={classes.app__countertitle} >Counter App</h1>
                    <Digits c1={this.props.counter1} c2={this.props.counter2} />
                    <Controls increment={this.props.incrementCounter} decrement={this.props.decrementCounter} saveCounter={this.props.saveCounter} />
                </div>
            </Aux>
        );
    }
};

export default Counter;