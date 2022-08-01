import React, {FC} from 'react';
import {Button} from "@mui/material";
import {useAppDispatch} from "../../../../hooks/redux";
import {setGenreList, setSortBy, setSortByYear, setUserFavoriteType} from "../../../../store/reducers/moviesSlice";
import {DEFAULT_YEAR, SORT, USER_FAVORITE_TYPES} from "../../../../shared/settings/settings";

const style = {
  color: "secondary",
  width: "100%",
  textTransform: "unset",
  mt: ".6rem"
}

const ResetButton: FC = () => {
  const dispatch = useAppDispatch();
  function clickHandler() {
    dispatch(setSortBy(SORT.DEFAULT))
    dispatch(setSortByYear(DEFAULT_YEAR))
    dispatch(setUserFavoriteType(USER_FAVORITE_TYPES.DEFAULT))
    dispatch(setGenreList([]))
  }

  return (
    <Button onClick={clickHandler} variant={"contained"} color={"secondary"} sx={style}>
      Сбросить все фильтры
    </Button>
  );
};

export default ResetButton;