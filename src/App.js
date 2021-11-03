import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux-toolkit/counter/counterSlice'

const App = () => {
  const dipsatch = useDispatch();
  const counter = useSelector(c => c.counter.value);
  const onIncreaseClick = () => dipsatch(increment());
  const onDecreaseClick = () => dipsatch(decrement());

  return (
    <div className='App'>
         <div>Count: {counter}</div>
         <button onClick={onIncreaseClick}>Increase Count</button>
         <button onClick={onDecreaseClick}>Decrease Count</button>
      </div>
  );
}

export default App;
