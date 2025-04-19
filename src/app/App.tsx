import "./App.scss";
import React from "react";

import MovieListPage from "./Pages/MovieListPage/MovieListPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import RecommendationsPage from "./Pages/RecommendationsPage/RecommendationsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailsPage />,
  },
  {
    path: "/recommendations",
    element: <RecommendationsPage />,
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
