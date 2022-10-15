import React, {FC, SyntheticEvent, useState} from 'react';
import {StarOutline, StarOutlined} from "@mui/icons-material";
import {Button, IconButton, Snackbar, SnackbarCloseReason} from '@mui/material';
import {setUserFavoriteList} from "../../../../core/store/reducers/moviesSlice";
import {setAuthModalState} from "../../../../core/store/reducers/modalSlice";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks/redux";
import {ICardButtonProps} from "./interface";
import {selectAuth} from "../../../../core/store/reducers/authSlice";

const FavoriteButton: FC<ICardButtonProps> = ({id}) => {
  const {isAuth} = useAppSelector(selectAuth);
  const favoriteList = useAppSelector(state => state.moviesReducer.sortByUserFavorite.favorites);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason): void => {
    if (reason !== 'clickaway') setOpen(false);
  };

  const onClickFavorite = () => {
    if (isAuth) {
      setOpen(true);
      dispatch(setUserFavoriteList(id));
      return;
    }
    dispatch(setAuthModalState(true));
  };

  const snackbarAction = <Button color="primary" size="small" variant="contained" onClick={onClickFavorite}>Отменить</Button>;

  return (
    <>
      <IconButton onClick={onClickFavorite} size="small">
        {isAuth && favoriteList.includes(id) ? <StarOutlined/> : <StarOutline/>}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message='Фильм успешно добавлен в избранное'
        action={snackbarAction}
        color="secondary"
      />
    </>
  );
};

export default FavoriteButton;