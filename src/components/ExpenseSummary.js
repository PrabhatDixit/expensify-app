import React from 'react';
import {connect} from 'react-redux';
import {expensesCount,expensesTotal} from '../actions/expenses';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';


const ExpenseSummary = ({expenseCount,total}) => {
        
    const formattedExpenseTotal = numeral(total).format('$0,0.00');
        return (
        <div className='pageHeader'>
            <div className='content-container'>
                <h1 className='pageHeader__title'>
                    Showing <span>{expenseCount}</span> expenses totalling  <span>{formattedExpenseTotal}</span>
                </h1>
                <div className='pageHeader__actions'>  
                    <Link className='button' to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
   
    return {
        expenseCount: visibleExpenses.length,
        total:getExpensesTotal(visibleExpenses)
        
    };
}

export default connect(mapStateToProps)(ExpenseSummary);