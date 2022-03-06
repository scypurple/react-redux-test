import React, {useRef, useState} from 'react';

function Demo() {
    const [sum, setSum] = useState(0);
    const selectRef = useRef(null);
    const increment = () => setSum(sum + +selectRef.current.value);
    const decrement = () => setSum(sum - +selectRef.current.value);
    const incrementIfOdd = () => setSum((sum % 2) ? sum + +selectRef.current.value : sum);
    const incrementAsync = () => setTimeout(() => setSum(sum + +selectRef.current.value), 500);
    return (<>
            <input type="text" readOnly value={sum}/><br/>
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