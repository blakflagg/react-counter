import React from 'react';
import classes from './CounterList.module.css';

let getID = () => {
    let d = new Date();
    let n = d.getTime();

    return Math.floor(Math.random() * Math.floor(n));
}

const counterList = (props) => {

    let buildList = props.itemList.map((item) => {
        let c1 = item.counter1.toString();
        let c2 = item.counter2.toString();

        return <li key={getID()}>count: {c1.concat(c2)}</li>
    });
   
    return (
        <div className={classes.app__list}>
            <ul className={classes.app__list_items}>
                {buildList}
            </ul>
        </div>
    )
};
export default counterList;
