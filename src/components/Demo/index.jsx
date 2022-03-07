import React, {useRef} from 'react';
import store from "../../redux/store";
import {Increment, Decrement} from "../../redux/count_action";

function Demo() {
    //const [sum, setSum] = useState(0);
    const selectRef = useRef(null);
    // const increment = () => setSum(sum + +selectRef.current.value);
    // const decrement = () => setSum(sum - +selectRef.current.value);
    const increment = () => {
        const value = +selectRef.current.value;
        store.dispatch(Increment(value));
    }
    const decrement = () => {
       const value = +selectRef.current.value;
       store.dispatch(Decrement(value));
    };
    const incrementIfOdd = () => {
        const value = +selectRef.current.value;
        if (store.getState() % 2) {
            store.dispatch(Increment(value));
        }
    };
    const incrementAsync = () => {
        const value = +selectRef.current.value;
        setTimeout(() =>
            store.dispatch(Increment(value)), 2000);
    };
    return (<>
            <input type="text" readOnly value={store.getState()}/><br/>
            <select ref={selectRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementIfOdd}>Odd</button>
            <button onClick={incrementAsync}>Async</button>
        </>);
}

export default Demo;