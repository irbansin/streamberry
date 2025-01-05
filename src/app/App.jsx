import { Header } from "../stories/Header/Header";
import "./App.scss";
import Counter from "../stories/Counter/Counter.tsx";
import Searchbar from "../stories/Searchbar/Searchbar.tsx";
import Tabs from "../stories/Tabs/Tabs.tsx";
import { useEffect } from "react";

function search(searchTerm) {
  console.log("searching for", searchTerm);
}

function App() {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d"
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  });
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
