
const  expenseReducer = (state = [],action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [ //array spread
                ...state,
                action.expense
            ]

        case 'REMOVE_EXPENSE':
            return state.filter((exp) => action.id !== exp.id ) 
        case 'EDIT_EXPENSE':
            return state.map ( (expense) => {
                if (expense.id === action.id) {
                    return { //obbject spread
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            } )
        case 'SET_EXPENSES':
            console.log('EEE')
            console.log(action.expenses)
            return action.expenses;

        default: 
            return state;

    }

};

export default expenseReducer;
