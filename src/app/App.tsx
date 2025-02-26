import "./App.scss";
import React from "react";

import MovieListPage from "./Pages/MovieListPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MovieListPage></MovieListPage>
      </ErrorBoundary>
    </div>
  );
}

export default App;
