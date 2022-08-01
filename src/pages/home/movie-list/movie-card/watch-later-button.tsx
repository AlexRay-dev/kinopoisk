import React, {FC, useState} from 'react';
import {BookmarkBorder, BookmarkOutlined} from "@mui/icons-material";
import {Button, IconButton, Snackbar} from "@mui/material";
import {ICardButtonProps} from "./movie-card";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {setUserWatchLaterList} from "../../../../store/reducers/moviesSlice";
import {setAuthModalState} from "../../../../store/reducers/modalSlice";

const WatchLaterButton: FC<ICardButtonProps> = ({id}) => {
  const {isAuth} = useAppSelector(state => state.authReducer)
  const watchLaterList = useAppSelector(state => state.moviesReducer.sortByUserFavorite.watchLater)
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function onClickWatchLater() {
    if (isAuth) {
      setOpen(true);
      dispatch(setUserWatchLaterList(id))
      return;
    }
    dispatch(setAuthModalState(true))
  }

  const action = (
    <Button color="primary" size="small" variant={"contained"} onClick={onClickWatchLater}>
      Отменить
    </Button>
  );

  return (
    <>
      <IconButton
        onClick={onClickWatchLater}
        size="small"
      >
        {watchLaterList.includes(id) ? <BookmarkOutlined/> : <BookmarkBorder/>}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message='Фильм добавлен в список "смотреть позже"'
        action={action}
      />
    </>
  );
};

export default WatchLaterButton;