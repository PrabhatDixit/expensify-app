import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'


export const history = createHistory();

const AppRouter = () => (
    //changed BrowserRouter to Router as we need to use history module for login / logout redirection. BrowserRouter has implicit module socant be manipulated.
    <Router history={history}> 
    <div> 
        <Switch>
            <PublicRoute path="/" exact={true} component={Login} />
            <PrivateRoute path="/dashboard" component={ ExpenseDashboard } />
            <PrivateRoute path="/create" exact={true}  component={AddExpensePage } />
            <PrivateRoute path="/edit/:id" exact={true}  component={EditExpensePage } />
            <Route path="/error" exact={true}  component={NotFoundPage } />
        </Switch>
    </div>
    </Router>
    
    );


export default AppRouter;