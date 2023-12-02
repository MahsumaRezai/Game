import React from 'react';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Head from './Component/Head/Head';
import Home from './Component/Pages/Home';
import Browse from './Component/Pages/Browse';

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



        </Fragment>
    );
};

export default App;
