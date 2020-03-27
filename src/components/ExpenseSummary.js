import React from 'react';
import {connect} from 'react-redux';
import {expensesCount,expensesTotal} from '../actions/expenses';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';


const ExpenseSummary = (props) => (
        <div>
        <h3>{props.expenses.length > 0 && `Showing ${props.expenses.length} expenses totalling $ ${props.total}` }</h3>
            
        </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        total:getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
        
    };
}

export default connect(mapStateToProps)(ExpenseSummary);