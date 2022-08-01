import React, {FC, useState} from 'react';
import {StarOutline, StarOutlined} from "@mui/icons-material";
import {Button, IconButton, Snackbar} from '@mui/material';
import {ICardButtonProps} from "./movie-card";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setUserFavoriteList} from "../../../../store/reducers/moviesSlice";
import {setAuthModalState} from "../../../../store/reducers/modalSlice";

const FavoriteButton: FC<ICardButtonProps> = ({id}) => {
  const {isAuth} = useAppSelector(state => state.authReducer)
  const favoriteList = useAppSelector(state => state.moviesReducer.sortByUserFavorite.favorites)
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function onClickFavorite() {
    if (isAuth) {
      setOpen(true);
      dispatch(setUserFavoriteList(id))
      return
    }
    dispatch(setAuthModalState(true))
  }

  const action = (
    <Button color="primary" size="small" variant={"contained"} onClick={onClickFavorite}>
      Отменить
    </Button>
  );

  return (
    <>
      <IconButton
        onClick={onClickFavorite}
        size="small"
      >
        {isAuth && favoriteList.includes(id) ? <StarOutlined/> : <StarOutline/>}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message='Фильм успешно добавлен в избранное'
        action={action}
        sx={{
          color: "secondary"
        }}
      />
    </>
  );
};

export default FavoriteButton;