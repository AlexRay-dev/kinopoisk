import React, {FC} from 'react';
import {FormControlLabel} from "@mui/material";
import {selectMovieList, setGenreList} from "../../../../../core/store/reducers/moviesSlice";
import {toggleIdInArray} from "../../utils/toggleIdInArray";
import {setCurrentPage} from "../../../../../core/store/reducers/paginationSlice";
import {useAppDispatch, useAppSelector} from "../../../../../core/hooks/redux";
import {StyledCheckbox} from "./styled";

interface IGenreCheckboxProps {
  id: number,
  name: string,
}

const GenreCheckbox: FC<IGenreCheckboxProps> = ({id, name}) => {
  const dispatch = useAppDispatch();
  const {genreList} = useAppSelector(selectMovieList);
  const isChecked = genreList.includes(id);

  const changeHandler = (id: number) => {
    dispatch(setGenreList(toggleIdInArray(genreList, id)));
    dispatch(setCurrentPage(1));
  };

  return (
    <FormControlLabel label={name} control={
      <StyledCheckbox checked={isChecked} onChange={() => changeHandler(id)} size={"small"}/>
    }/>
  );
};

export default GenreCheckbox;