// redux 核心 store对象
import {createStore} from 'redux';
import CountReducer from './count_reducer';

const store = createStore(CountReducer);
export default store;
