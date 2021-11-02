import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCounter, decreaseCounter } from './redux/counter/actions'

const App = () => {
  const dipsatch = useDispatch();
  const counter = useSelector(c => c.counter.count);
  const onIncreaseClick = () => dipsatch(increaseCounter());
  const onDecreaseClick = () => dipsatch(decreaseCounter());

  return (
    <div className='App'>
         <div>Count: {counter}</div>
         <button onClick={onIncreaseClick}>Increase Count</button>
         <button onClick={onDecreaseClick}>Decrease Count</button>
      </div>
  );
}

export default App;
