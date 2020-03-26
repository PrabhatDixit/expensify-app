import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'



const AppRouter = () => (
    <BrowserRouter>
    <div> 
        <Header />
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboard} />
            <Route path="/create" exact={true}  component={AddExpensePage } />
            <Route path="/edit/:id" exact={true}  component={EditExpensePage } />
            <Route path="/help" exact={true}  component={HelpPage } />
            <Route exact={true}  component={NotFoundPage } />
        </Switch>
    </div>
    </BrowserRouter>
    
    );


export default AppRouter;