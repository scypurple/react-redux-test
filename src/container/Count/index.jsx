import {connect} from "react-redux";
import {IncrementAsync, Decrement, Increment} from "../../redux/count_action";
import React, {useRef} from 'react';

export default connect(
    state => ({sum : state}),
    {
        Increment, Decrement, IncrementAsync,
    }
)(Demo);


function Demo(props) {
    const selectRef = useRef(null);
    const increment = () => {
        const value = +selectRef.current.value;
        props.Increment(value);
    }
    const decrement = () => {
        const value = +selectRef.current.value;
        props.Decrement(value);
    };
    const incrementIfOdd = () => {
        const value = +selectRef.current.value;
        if (props.sum % 2) props.Increment(value);
    };
    const incrementAsync = () => {
        const value = +selectRef.current.value;
        props.IncrementAsync(value, 500);
    };
    return (<>
        <input type="text" readOnly value={props.sum} /><br/>
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