import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducer/index'
import thunk from 'redux-thunk'

export const store = createStore(
    reducer,  
    applyMiddleware(thunk)
);