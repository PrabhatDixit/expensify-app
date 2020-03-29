import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';


class ExpenseListFilters extends React.Component{
  
    state = {
        calendarfocussed: null
    }

    onFocusChange = (calendarfocussed) => {
        this.setState(() => ({calendarfocussed}))

    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input className='text-input'  type = 'text' 
                            value= {this.props.filters.text}
                            placeholder="Search Expenses"
                            onChange={ (e) => {  props.dispatch(setTextFilter(e.target.value)) } } >
                        </input>
                    </div>
                    <div className='input-group__item'>
                        <select className='select' 
                            value={this.props.filters.sortBy} 
                            onChange= {(e) => {
                                e.target.value === 'amount' ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate())
                            }}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item'>
                        <DateRangePicker 
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onFocusChange = {this.onFocusChange}
                            onDatesChange = {this.onDatesChange}
                            focusedInput={this.state.calendarfocussed}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange= {() => false } >
                        </DateRangePicker>
                    </div>
                </div>
            </div>
    )
    }


}

const mapStateToProps = (state)=> {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);
