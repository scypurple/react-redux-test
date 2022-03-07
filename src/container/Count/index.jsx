import CountUI from '../../components/Demo';
import {connect} from "react-redux";
import {AsyncIncrement, Decrement, Increment} from "../../redux/count_action";

const mapStateToProps = (state) => ({
    sum: state,
});
const mapDispatchToProps = (dispatch) => ({
    increment: value => dispatch(Increment(value)),
    decrement: value => dispatch(Decrement(value)),
    incrementAsync: (value, time) => dispatch(AsyncIncrement(value,time))
});

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;