import "./App.css";
import CounterDepr from "./counter-class-comp/Counter-class-comp";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Streamberry </h1>
      </header>
      <Counter initialCount="3"></Counter>
      <CounterDepr initialCount="3"></CounterDepr>
    </div>
  );
}

export default App;
