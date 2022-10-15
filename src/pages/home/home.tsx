import React, {FC} from 'react';
import {Container} from "@mui/material";
import SideMenu from "./side-menu/side-menu";
import MovieList from "./movie-list/movie-list";
import {HomeInner} from "./styled";

const Home: FC = () => {
  return (
    <Container>
      <HomeInner>
        <SideMenu/>
        <MovieList/>
      </HomeInner>
    </Container>
  );
};

export default Home;