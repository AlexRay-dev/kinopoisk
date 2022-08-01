import React, {FC} from 'react';
import {FormControl, NativeSelect} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setSortBy} from "../../../../store/reducers/moviesSlice";
import {sortByPopularData} from "../../../../shared/settings/settings";

const PopularSelect: FC = () => {
  const {sortByPopular} = useAppSelector(state => state.moviesReducer)
  const dispatch = useAppDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSortBy(event.target.value))
  }

  const options = sortByPopularData.map(({title, value}) =>
    <option key={value} value={value}>{title}</option>
  )

  return (
    <FormControl fullWidth size={"small"} sx={{mt: ".6rem"}}>
      <Typography variant={"h6"} mb={".1rem"} >Сортировать по: </Typography>

      <NativeSelect onChange={onChangeHandler} value={sortByPopular} sx={{
        border: "1px solid secondary"
      }}>
        {options}
      </NativeSelect>
    </FormControl>
  );
};

export default PopularSelect;