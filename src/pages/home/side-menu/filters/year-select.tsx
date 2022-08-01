import React, {FC} from 'react';
import {FormControl, NativeSelect} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setSortByYear} from "../../../../store/reducers/moviesSlice";
import {yearOptionsData} from "../../../../shared/settings/settings";

const YearSelect: FC = () => {
  const {sortByYear} = useAppSelector(state => state.moviesReducer)
  const dispatch = useAppDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSortByYear(event.target.value))
  }

  const options = yearOptionsData.map(({title, value}) =>
    <option key={value} value={value}>{title}</option>
  )

  return (
    <FormControl fullWidth size={"small"} sx={{mt: ".6rem"}}>
      <Typography variant={"h6"} mb={".1rem"} >Год релиза:</Typography>

      <NativeSelect value={sortByYear} onChange={onChangeHandler} sx={{
        border: "1px solid secondary"
      }}>
        {options}
      </NativeSelect>
    </FormControl>
  );
};

export default YearSelect;