// import React, {useRef} from 'react';
//
// function Demo(props) {
//     const selectRef = useRef(null);
//     const increment = () => {
//         const value = +selectRef.current.value;
//         props.increment(value);
//     }
//     const decrement = () => {
//        const value = +selectRef.current.value;
//        props.decrement(value);
//     };
//     const incrementIfOdd = () => {
//         const value = +selectRef.current.value;
//         if (props.sum % 2) props.increment(value);
//     };
//     const incrementAsync = () => {
//         const value = +selectRef.current.value;
//         props.incrementAsync(value, 500);
//     };
//     return (<>
//             <input type="text" readOnly value={props.sum} /><br/>
//             <select ref={selectRef}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//             </select>
//             <button onClick={increment}>+</button>
//             <button onClick={decrement}>-</button>
//             <button onClick={incrementIfOdd}>Odd</button>
//             <button onClick={incrementAsync}>Async</button>
//         </>);
// }