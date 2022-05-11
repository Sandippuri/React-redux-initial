import classes from './Counter.module.css';
import { counterAction } from '../store/counter';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
 const counter = useSelector(state=>state.counter.counter);
 const dispatch = useDispatch();

  const incrementHandler =()=>{
    dispatch(counterAction.increment());
  }
  const increaseHandler =()=>{
    dispatch(counterAction.increase(5));
  }
  const decrementHandler =()=>{
    dispatch(counterAction.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Reset</button>
    </main>
  );
};

export default Counter;
 