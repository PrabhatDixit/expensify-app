import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss' 


const store = configureStore();

// const expenseOne = store.dispatch(addExpense({description:'water bill', amount:300, createdAt:1585206403516}));
// const expenseTwo = store.dispatch(addExpense({description:'gas bill', amount:100, createdAt:1585206403100}));
// const expenseThree = store.dispatch(addExpense({description:'rent', amount:200, createdAt:1585206402000}));
// //store.dispatch(removeExpense({id:expenseOne.expense.id}))

// //store.dispatch ( setTextFilter ('bill'));

// // setTimeout( () => {
// //     store.dispatch ( setTextFilter ('water'))
// // }, 5000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

//console.log(visibleExpenses);

const jsx = (

    <Provider store={store}>
        <AppRouter />
    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))