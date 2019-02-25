import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Name from './components/Name/Name';
import Address from './components/Address/Address';
import Image from './components/Image/Image';
import Loan from './components/Loan/Loan';
import Rent from './components/Rent/Rent';

export default(
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/name" component={Name} />
        <Route path="/address" component={Address} />
        <Route path="/image" component={Image} />
        <Route path="/loan" component={Loan} />
        <Route path="/rent" component={Rent} />
    </Switch>
)











