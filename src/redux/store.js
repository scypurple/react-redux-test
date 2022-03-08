// redux 核心 store对象
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
