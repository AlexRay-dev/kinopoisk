import {IMovieCard} from "../data/movieListData";

export const paginate = (movieList: IMovieCard[], currentPage: number, contentPerPage: number) => {
  const lastIndex = currentPage * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;
  return movieList.slice(firstIndex, lastIndex);
};