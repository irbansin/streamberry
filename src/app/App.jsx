import "./App.scss";
import CounterDepr from "./components/counter-class-comp/Counter-class-comp";
import Counter from "./components/counter/Counter";
import Searchbar from "./components/searchbar/Searchbar";
import Tabs from "./components/tabs/Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Streamberry </h1>
      </header>
      <section>
        <Searchbar initialSearch=""></Searchbar>
        <Tabs
          tabsList={["All", "Documentory", "Comedy", "Horror", "Crime"]}
        ></Tabs>
        <div className="movieList">
          <Counter initialCount="3"></Counter>

          <CounterDepr initialCount="3"></CounterDepr>
        </div>
      </section>
    </div>
  );
}

export default App;
