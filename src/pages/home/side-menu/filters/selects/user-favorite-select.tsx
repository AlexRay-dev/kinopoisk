import React, {FC} from 'react';
import {FormControl} from "@mui/material";
import Typography from "@mui/material/Typography";
import {selectMovieList, setUserFavoriteType} from "../../../../../core/store/reducers/moviesSlice";
import {userOptionsData} from "../../../../../core/const/config";
import {useAppDispatch, useAppSelector} from "../../../../../core/hooks/redux";
import {StyledSelect} from "./styled";

const UserFavoriteSelect: FC = () => {
  const {sortByUserFavorite} = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();

  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUserFavoriteType(event.target.value));
  };

  return (
    <FormControl fullWidth size={"small"} sx={{mt: "1rem"}}>
      <Typography variant={"h6"} mb={1}>Избранное:</Typography>

      <StyledSelect value={sortByUserFavorite.default} onChange={onSelectChangeHandler}>
        {userOptionsData.map(({title, value}) =>
          <option key={value} value={value}>{title}</option>
        )}
      </StyledSelect>
    </FormControl>
  );
};

export default UserFavoriteSelect;