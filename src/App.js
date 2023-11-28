import React from 'react';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Head from './Component/Head/Head';
import Home from './Component/Pages/Home';

const App = (props) => {

    return (
        <Fragment>
            <Head />
            <Route path="">
                <Home />

            </Route>



        </Fragment>
    );
};

export default App;
