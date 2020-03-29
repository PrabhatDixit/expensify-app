import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const AddExpensePage = (props) => (

    <div>
        <div className='pageHeader'> 
            <div className='content-container'>
                <h1 className = 'pageHeader__title'>Add Expense </h1>
            </div>
        </div>
        <div className='content-container'> 
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense));
                    props.history.push('/');
            }}/>
         </div>  
    </div>
);

export default connect()(AddExpensePage);