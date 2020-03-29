import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>Expenses</div>
            <div className='show-for-desktop'>Expense</div>
            <div className='show-for-desktop'>Amount</div>
        </div>
        <div className = 'list-body'>
        {
            props.expenses.length === 0 ? (
               <div className='list-item list-item--message'> <span>No expenses</span> </div>
            ) : (
                props.expenses.map( (expense) => {
                    return (
                        <ExpenseListItem key={expense.id} id={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt}></ExpenseListItem>
                    )   
                })
            )
        }
        </div>
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