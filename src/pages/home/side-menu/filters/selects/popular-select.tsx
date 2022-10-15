import React, {FC} from 'react';
import {FormControl} from "@mui/material";
import Typography from "@mui/material/Typography";
import {selectMovieList, setSortBy} from "../../../../../core/store/reducers/moviesSlice";
import {sortByPopularData} from "../../../../../core/const/config";
import {useAppDispatch, useAppSelector} from "../../../../../core/hooks/redux";
import {StyledSelect} from "./styled";

const PopularSelect: FC = () => {
  const {sortByPopular} = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();

  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <FormControl fullWidth size="small" sx={{mt: ".6rem"}}>
      <Typography variant="h6" mb=".1rem" >Сортировать по: </Typography>

      <StyledSelect onChange={onSelectChangeHandler} value={sortByPopular}>
        {sortByPopularData.map(({title, value}) =>
          <option key={value} value={value}>{title}</option>
        )}
      </StyledSelect>
    </FormControl>
  );
};

export default PopularSelect;