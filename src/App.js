import React from 'react';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Head from './Component/Head/Head';
import Home from './Component/Pages/Home';
import Browse from './Component/Pages/Browse';
import Detalis from './Component/Pages/Detalis';

const App = (props) => {

    return (
        <Fragment>
            <Head />
            <Route path="/" exact>
                <Home />

            </Route>
            <Route path='/Browse'>
                <Browse />
            </Route>

            <Route path='/Details'>
                <Detalis />
            </Route>


        </Fragment>
    );
};

export default App;
