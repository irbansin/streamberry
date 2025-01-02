import "./App.scss";
import CounterDepr from "./counter-class-comp/Counter-class-comp";
import Counter from "./counter/Counter";
import Searchbar from "./searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Streamberry </h1>
      </header>
      <content>
        <Searchbar></Searchbar>
        <div className="movieList">
          <Counter initialCount="3"></Counter>

          <CounterDepr initialCount="3"></CounterDepr>
        </div>
      </content>
    </div>
  );
}

export default App;
