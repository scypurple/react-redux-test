import {INCREMENT, DECREMENT} from './const';

export const Increment = value => ({type: INCREMENT, value});
export const Decrement = value => ({type: DECREMENT, value});
export const AsyncIncrement = (value, time) => dispatch =>
    setTimeout(
        () => dispatch(Increment(value))
        , time
    );