import React, {useRef} from 'react';
import store from "../../redux/store";

function Demo() {
    //const [sum, setSum] = useState(0);
    const selectRef = useRef(null);
    // const increment = () => setSum(sum + +selectRef.current.value);
    // const decrement = () => setSum(sum - +selectRef.current.value);
    const increment = () => {
        const value = +selectRef.current.value;
        store.dispatch({type: 'increment', value})
    }
    const decrement = () => {
       const value = +selectRef.current.value;
       store.dispatch({type: 'decrement', value});
    };
    const incrementIfOdd = () => {};
    const incrementAsync = () => {};
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