import React, {FC} from 'react';
import {FormControl, NativeSelect} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setUserFavoriteType} from "../../../../store/reducers/moviesSlice";
import {userOptionsData} from "../../../../shared/settings/settings";

const UserFavoriteSelect: FC = () => {
  const userFavoriteType = useAppSelector(state => state.moviesReducer.sortByUserFavorite.default)
  const dispatch = useAppDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setUserFavoriteType(event.target.value))
  }

  const options = userOptionsData.map(({title, value}) =>
    <option key={value} value={value}>{title}</option>
  )

  return (
    <FormControl fullWidth size={"small"} sx={{mt: "1rem"}}>
      <Typography variant={"h6"} mb={1} >Избранное:</Typography>

      <NativeSelect value={userFavoriteType} onChange={onChangeHandler} sx={{
        border: "1px solid secondary"
      }}>
        {options}
      </NativeSelect>
    </FormControl>
  );
};

export default UserFavoriteSelect;