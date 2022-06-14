import './App.css';
import CounterView from './components/CounterView';
import CounterButtons from './components/CounterButtons';
import CounterIncrementInput from './components/CounterIncrementInput';

function App() {
  return (
    <div className="App">
    <h2>Redux contador</h2>
    <CounterView/>
    <CounterButtons/>
    <br/>

    <CounterIncrementInput />
    </div>
  );
}

export default App;
