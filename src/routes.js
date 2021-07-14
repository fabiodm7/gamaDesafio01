import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import landing from './pages/landing';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={landing}/>
            </Switch>
        </BrowserRouter>
    )
}