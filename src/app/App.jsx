import { Header } from "../stories/Header/Header";
import "./App.scss";
import Counter from "./components/counter/Counter.tsx";
import Searchbar from "./components/searchbar/Searchbar.tsx";
import Tabs from "./components/tabs/Tabs.tsx";

function search(searchTerm) {
  console.log("searching for", searchTerm);
}

function App() {
  let list = ["All", "Documentory", "Comedy", "Horror", "Crime"];

  return (
    <div className="App">
      <Header title="ZOLO Movies"></Header>
      <section>
        <Searchbar initialSearch="" search={search}></Searchbar>
        <Tabs tabsList={list}></Tabs>
        <div className="movieList">
          <Counter initialCount="0" title="likes"></Counter>
        </div>
      </section>
    </div>
  );
}

export default App;
