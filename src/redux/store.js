// redux 核心 store对象
import {createStore, applyMiddleware} from 'redux';
import CountReducer from './count_reducer';
import thunk from 'redux-thunk';

const store = createStore(CountReducer, applyMiddleware(thunk));
export default store;
