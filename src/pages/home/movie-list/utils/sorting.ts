import {IMovieCard} from "../../../../shared/data/movieListData";
import {getYear} from "date-fns"
import {IUserFavoriteList} from "../../../../store/reducers/moviesSlice";
import {SORT, USER_FAVORITE_TYPES} from "../../../../shared/settings/settings";

export function sortByPopularity(array: IMovieCard[], type: string) {
  switch (type) {
    case SORT.POPULAR_DOWN:
      return [...array].sort(compare("popularity"));
    case SORT.POPULAR_UP:
      return [...array].sort(compare("popularity")).reverse();
    case SORT.RATING_DOWN:
      return [...array].sort(compare("vote_average"));
    case SORT.RATING_UP:
      return [...array].sort(compare("vote_average")).reverse();
    default:
      return array;
  }
}

export function filterByYear(array: IMovieCard[], type: string) {
  if (type === "ALL") return array;

  return array.filter((movie) => {
    const date = getYear(new Date(movie.release_date));

    if (type === String(date)) return movie;
  });
}

export function filterByGenre(array: IMovieCard[], genreList: number[]) {
  const isEmpty = genreList.length === 0;
  if (isEmpty) return array;

  return array.filter((item: IMovieCard) => {
    const itemGenres = item.genre_ids;
    if (intersect(genreList, itemGenres).length > 0) return item;
  });
}

export function filterByUserFavorite(array: IMovieCard[], userFavoriteList: IUserFavoriteList) {
  const watchLaterStore = userFavoriteList.watchLater;
  const favoriteStore = userFavoriteList.favorites;

  switch (userFavoriteList.default) {
    case USER_FAVORITE_TYPES.WATCH_LATER:
      return [...array].filter((item) => {
        const itemId = item.id;

        if (watchLaterStore.includes(itemId)) return item;
      });
    case USER_FAVORITE_TYPES.FAVORITES:
      return [...array].filter((item) => {
        const itemId = item.id;
        if (favoriteStore.includes(itemId)) return item;
      });
    default:
      return array;
  }
}

export function filterBySearchPopularity(array: IMovieCard[], type: string) {
  if (type === "Популярный") {
    return [...array].filter((item) => {
      const isPopular = item.vote_count > 200 && item.popularity > 100
      if (isPopular) return item
    });
  }
  return [...array].filter((item) => {
    const isNotPopular = item.vote_count > 200 && item.popularity > 100
    if (isNotPopular) return item
  });
}

const intersect = function (arr1: any[], arr2: any[]) {
  return arr1.filter(function (n) {
    return arr2.indexOf(n) !== -1;
  });
};

function compare(field: string) {
  return (a: any, b: any) => (a[field] < b[field] ? 1 : -1);
}











