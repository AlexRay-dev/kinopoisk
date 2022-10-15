import React, {FC, SyntheticEvent, useState} from 'react';
import {BookmarkBorder, BookmarkOutlined} from "@mui/icons-material";
import {Button, IconButton, Snackbar, SnackbarCloseReason} from "@mui/material";
import {selectMovieList, setUserWatchLaterList} from "../../../../core/store/reducers/moviesSlice";
import {setAuthModalState} from "../../../../core/store/reducers/modalSlice";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks/redux";
import {ICardButtonProps} from "./interface";
import {selectAuth} from "../../../../core/store/reducers/authSlice";

const WatchLaterButton: FC<ICardButtonProps> = ({id}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {isAuth} = useAppSelector(selectAuth);
  const {sortByUserFavorite} = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();

  const handleClose = (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason): void => {
    if (reason !== 'clickaway') setOpen(false);
  };

  const onClickWatchLater = () => {
    if (isAuth) {
      setOpen(true);
      dispatch(setUserWatchLaterList(id));
      return;
    }
    dispatch(setAuthModalState(true));
  };

  const snackbarAction = <Button color="primary" size="small" variant="contained" onClick={onClickWatchLater}>Отменить</Button>

  return (
    <>
      <IconButton onClick={onClickWatchLater} size="small">
        {sortByUserFavorite.watchLater.includes(id) ? <BookmarkOutlined/> : <BookmarkBorder/>}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message='Фильм добавлен в список "смотреть позже"'
        action={snackbarAction}
      />
    </>
  );
};

export default WatchLaterButton;