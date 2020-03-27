import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';
 
//could be deconstructed to (description, amount, createdAt) if using spread on ExpenseListItem call in ExpenseList
const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>Description:{props.description}</h3></Link>
        <p>
        {numeral(props.amount).format('$0,0.00')}   -   
        {moment(props.createdAt).format('MMM Do YYYY')}
        
        </p>

        
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default connect()(ExpenseListItem);
