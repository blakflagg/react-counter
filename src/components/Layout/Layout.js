import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css';

const layout = (props) => (

    <Aux>
        {/* <div className={classes.wrapper}> */}
            {/* <div className={classes.app}> */}
                <main className={classes.app} >
                    {props.children}
                </main>
            {/* </div> */}
        {/* </div> */}
    </Aux>
)

export default layout;