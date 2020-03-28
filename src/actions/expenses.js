import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={}) => {
    return (dispatch) => {
        const {
            description='', 
            note='',
            amount=0, 
            createdAt=0
            } = expenseData; //same as destructuring in the arguments

        const expense = { description, note, amount,createdAt };

        database.ref('expenses').push (expense).then ( (ref) => {
            dispatch(addExpense( {
                id:ref.key,
                ...expense
            }));
            
        });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
        return (dispatch) => {
            return database.ref('expenses').once('value').then( (snapshot) => { 
                //parse the data as per expense object
                const expenses = [];
                snapshot.forEach(childSnapShot => {
                    expenses.push({
                        id:childSnapShot.key,
                        ...childSnapShot.val()
                    })
                    
                });
                //dispatch
                //console.log(expenses)
                dispatch(setExpenses(expenses));
        })

    };
};

export const removeExpense = (id ) => ({

    type:'REMOVE_EXPENSE',
    id
    
    });

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then ( () => {
            dispatch(removeExpense(id))
        })
    }
}

export const editExpense =  (id, updates) => ({
type:'EDIT_EXPENSE',
id,
updates
});

export const startEditExpense = (id,updates) => {
    return (dispatch) => {
        //first update db
        return database.ref(`expenses/${id}`).update(updates).then ( (snapshot) => {
            dispatch(editExpense(id,updates) )

        })
        //then dispatch

    }

} 

