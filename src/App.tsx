import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import MovieInfo from "./pages/movie-info/movie-info";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="search" element={<Search />}/>
        <Route path="movie/:id" element={<MovieInfo/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Route>
    </Routes>
  );
};

export default App;
