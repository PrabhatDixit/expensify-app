

import {createStore} from 'redux';

const incrementCount = ( {incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});


//REDUCERS ( are pure functions , never change state or action)

const countReducer = (state = {count:0}, action ) => {

    switch(action.type){
        case 'INCREMENT':
            return { 
                count: state.count + action.incrementBy    
            }
        case 'DECREMENT':
            return { 
                count: state.count - action.decrementBy     
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return { count:0 }
        
        default:
            return state;
    }

};

const store = createStore( countReducer);

const unsubscribe = store.subscribe ( () => {
    console.log(store.getState());
});

store.dispatch( incrementCount({incrementBy: 5}) );
store.dispatch( incrementCount() );
store.dispatch( decrementCount() );
store.dispatch( decrementCount({decrementBy: 5}) );
store.dispatch( decrementCount({decrementBy: 2}) );
store.dispatch( setCount({'count': 101}) );

unsubscribe();
store.dispatch( resetCount() );

