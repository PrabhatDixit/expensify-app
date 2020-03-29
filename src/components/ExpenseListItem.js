import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';
 
//could be deconstructed to (description, amount, createdAt) if using spread on ExpenseListItem call in ExpenseList
const ExpenseListItem = (props) => (
   
        <Link className='list-item' to={`/edit/${props.id}`}>
            <div>
                <h3 className='list-item__title'>Description:{props.description}</h3>
                <span className='list-item__subtitle'>{moment(props.createdAt).format('MMM Do YYYY')}</span>
            </div>
            <div>
                <h3 className='list-item__data'>{numeral(props.amount).format('$0,0.00')}  </h3>
            </div>
    </Link>
);

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default connect()(ExpenseListItem);
