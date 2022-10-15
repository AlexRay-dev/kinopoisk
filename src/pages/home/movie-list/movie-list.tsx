import React, {FC} from 'react';
import {Grid} from "@mui/material";
import MovieCard from "./movie-card/movie-card";
import {paginate} from '../../../core/utils/paginate';
import { selectSortedMovies } from '../../../core/utils/selectors';
import {CONTENT_PER_PAGE} from "../../../core/const/config";
import {useAppSelector} from "../../../core/hooks/redux";

const MovieList: FC = () => {
  const {currentPage} = useAppSelector(state => state.paginationReducer);
  const filteredMovieList = useAppSelector(selectSortedMovies);
  const paginated = paginate(filteredMovieList, currentPage, CONTENT_PER_PAGE);

  return (
    <Grid container spacing={2} ml={"1.8rem"}>
      {paginated.map(movie =>
        <MovieCard key={movie.id} {...movie}/>
      )}
    </Grid>
  );
};

export default MovieList;