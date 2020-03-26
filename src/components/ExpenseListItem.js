import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
 
//could be deconstructed to (description, amount, createdAt) if using spread on ExpenseListItem call in ExpenseList
const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>Description:{props.description}</h3></Link>
        <p>{props.amount} - {props.createdAt}</p>

        
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default connect()(ExpenseListItem);
