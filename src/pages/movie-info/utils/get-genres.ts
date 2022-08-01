import {IMovieCard} from "../../../shared/data/movieListData";
import {genreListData} from "../../../shared/data/genreListData";

export const getGenresList = (film: IMovieCard | undefined) =>
  genreListData.reduce(
    (acc, { name, id }) =>
      // @ts-ignore
      film.genre_ids.includes(id) ? [...acc, name] : acc,
    []
  );
