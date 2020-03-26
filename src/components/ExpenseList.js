import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>This is expense list</h1>
        
        {props.expenses.map( (expense) => {
            return (
                <ExpenseListItem key={expense.id} id={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt}></ExpenseListItem>
            )   
        }) }
        
    </div>
);

//Alternate listitem call using spread

// return (
//     <ExpenseListItem key={expense.id} {...expense} />
// )  

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
        
    };
}

export default connect(mapStateToProps)(ExpenseList);