import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './reducers';

const store = createStore(
    todosReducer,
    composeWithDevTools()
);

export default store;

