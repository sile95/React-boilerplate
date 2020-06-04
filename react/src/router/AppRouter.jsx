import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '@core/src/screens/Dashboard';
import Error404 from '@core/src/screens/Error404';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route key="Dashboard" exact path="/" component={Dashboard} />
                <Route component={Error404} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
