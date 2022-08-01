import React, {FC} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import {setGenreList} from "../../../../../store/reducers/moviesSlice";
import {toggleIdInArray} from "../../utils/toggleIdInArray";
import {setCurrentPage} from "../../../../../store/reducers/paginationSlice";

interface IGenreCheckboxProps {
  id: number,
  name: string,
}

const GenreCheckbox: FC<IGenreCheckboxProps> = ({id, name}) => {
  const dispatch = useAppDispatch();
  const {genreList} = useAppSelector(state => state.moviesReducer);
  const isChecked = genreList.includes(id)

  function changeHandler(id: number) {
    dispatch(setGenreList(toggleIdInArray(genreList, id)));
    dispatch(setCurrentPage(1))
  }

  return (
    <FormControlLabel control={
      <Checkbox checked={isChecked} onChange={() => changeHandler(id)} size={"small"} sx={{pt: "1px", pb: "1px"}}/>
    } label={name}/>
  );
};

export default GenreCheckbox;