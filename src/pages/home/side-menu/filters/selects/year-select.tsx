import React, {FC} from 'react';
import {FormControl} from "@mui/material";
import Typography from "@mui/material/Typography";
import {selectMovieList, setSortByYear} from "../../../../../core/store/reducers/moviesSlice";
import {yearOptionsData} from "../../../../../core/const/config";
import {useAppDispatch, useAppSelector} from "../../../../../core/hooks/redux";
import { StyledSelect } from './styled';

const YearSelect: FC = () => {
  const {sortByYear} = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();

  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortByYear(event.target.value));
  };

  return (
    <FormControl fullWidth size={"small"} sx={{mt: ".6rem"}}>
      <Typography variant={"h6"} mb={".1rem"} >Год релиза:</Typography>

      <StyledSelect value={sortByYear} onChange={onSelectChangeHandler}>
        {yearOptionsData.map(({title, value}) =>
          <option key={value} value={value}>{title}</option>
        )}
      </StyledSelect>
    </FormControl>
  );
};

export default YearSelect;