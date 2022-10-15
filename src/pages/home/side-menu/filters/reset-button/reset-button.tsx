import React, {FC} from 'react';
import {setGenreList, setSortBy, setSortByYear, setUserFavoriteType} from "../../../../../core/store/reducers/moviesSlice";
import {DEFAULT_YEAR, SORT, USER_FAVORITE_TYPES} from "../../../../../core/const/config";
import {useAppDispatch} from "../../../../../core/hooks/redux";
import {StyledResetButton} from "./styled"

const ResetButton: FC = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setSortBy(SORT.DEFAULT));
    dispatch(setSortByYear(DEFAULT_YEAR));
    dispatch(setUserFavoriteType(USER_FAVORITE_TYPES.DEFAULT));
    dispatch(setGenreList([]));
  };

  return (
    <StyledResetButton onClick={clickHandler} variant={"contained"} color={"secondary"}>
      Сбросить все фильтры
    </StyledResetButton>
  );
};

export default ResetButton;