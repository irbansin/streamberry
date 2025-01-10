import "./App.css";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> streamberry </h1>
      </header>
      <Counter initialCount="3"></Counter>
    </div>
  );
}

export default App;
