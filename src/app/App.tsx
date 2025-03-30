import "./App.scss";
import React from "react";

import MovieListPage from "./Pages/MovieListPage/MovieListPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
