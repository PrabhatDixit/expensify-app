import React from 'react';
import {connect} from 'react-redux';
import {expensesCount,expensesTotal} from '../actions/expenses';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';


const ExpenseSummary = (props) => (
        <div>
        <h3>{props.expenses.length > 0 && `Showing ${props.expenses.length} expenses totalling ${numeral(props.total).format('$0,0.00')}` }</h3>
            
        </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenses: visibleExpenses,
        total:getExpensesTotal(visibleExpenses)
        
    };
}

export default connect(mapStateToProps)(ExpenseSummary);