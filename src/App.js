import './App.css';
import CounterView from './components/CounterView';
import CounterButtons from './components/CounterButtons';

function App() {
  return (
    <div className="App">
    <h2>Redux contador</h2>
    <CounterView/>
    <CounterButtons/>
    </div>
  );
}

export default App;
