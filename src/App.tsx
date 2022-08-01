import React, {FC} from 'react';
import {Container} from "@mui/material";
import Header from "./components/header/header";
import MovieList from "./pages/home/movie-list/movie-list";
import SideMenu from "./pages/home/side-menu/side-menu";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import MovieInfo from "./pages/movie-info/movie-info";

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="search"
          element={<Search />}
        />
        <Route path="movie/:id" element={<MovieInfo/>}/>
        <Route
          path="*"
          element={<h1>Page not found</h1>}
        />
      </Route>
    </Routes>

  );
}

export default App;
