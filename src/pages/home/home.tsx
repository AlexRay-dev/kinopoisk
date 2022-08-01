import React, {FC} from 'react';
import {Box, Container} from "@mui/material";
import SideMenu from "./side-menu/side-menu";
import MovieList from "./movie-list/movie-list";

const Home: FC = () => {
  return (
    <Container>
      <Box sx={{
        m: "1.5rem 0",
        display: "flex",
      }}>
        <SideMenu/>
        <MovieList/>
      </Box>
    </Container>
  );
};

export default Home;