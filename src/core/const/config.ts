import {ISelectData} from "../types/types";

export const DEFAULT_ADMIN_NAME = "Admin";
export const DEFAULT_ADMIN_PASSWORD = "Admin";

export const DEFAULT_YEAR = "ALL";
export const DEFAULT_SORT = "popularDown";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

export const CONTENT_PER_PAGE = 6;

export const SORT = {
  DEFAULT: DEFAULT_SORT,
  POPULAR_UP: "popularUp",
  POPULAR_DOWN: "popularDown",
  RATING_UP: "ratingUp",
  RATING_DOWN: "ratingDown",
};
export const sortByPopularData: ISelectData[] = [
  {value: SORT.POPULAR_DOWN, title: "Популярные по убыванию"},
  {value: SORT.POPULAR_UP, title: "Популярные по возрастанию"},
  {value: SORT.RATING_DOWN, title: "Рейтинг по убыванию"},
  {value: SORT.RATING_UP, title: "Рейтинг по возрастанию"},
];
export const yearOptionsData: ISelectData[] = [
  {value: DEFAULT_YEAR, title: "Все года"},
  {value: "2020", title: "2020"},
  {value: "2019", title: "2019"},
  {value: "2018", title: "2018"},
  {value: "2017", title: "2017"},
];
export const USER_FAVORITE_TYPES = {
  DEFAULT: "all",
  WATCH_LATER: "watchLater",
  FAVORITES: "favorites",
};
export const userOptionsData: ISelectData[] = [
  {value: USER_FAVORITE_TYPES.DEFAULT, title: "Не выбрано"},
  {value: USER_FAVORITE_TYPES.WATCH_LATER, title: "Смотреть позже"},
  {value: USER_FAVORITE_TYPES.FAVORITES, title: "Избранные"},
];