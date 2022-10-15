import React, {FC} from 'react';
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import LoginModal from "./authorization/login-modal";
import {setAuthModalState} from "../../core/store/reducers/modalSlice";
import {selectAuth, setAuthStatus} from "../../core/store/reducers/authSlice";
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {HeaderInner, HeaderLink} from './styled';

const Header: FC = () => {
  const {isAuth} = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const authorizationHandler = () => {
    if (isAuth) {
      dispatch(setAuthStatus(false));
      return;
    }
    dispatch(setAuthModalState(true));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderInner>
          <Box>
            <HeaderLink to="/">Главная</HeaderLink>
            <HeaderLink to="/search">Подбор фильма</HeaderLink>
          </Box>

          <Button onClick={authorizationHandler} variant="contained" color="success">
            {isAuth ? "Выйти" : "Авторизация"}
          </Button>

          <LoginModal/>
        </HeaderInner>
      </Toolbar>
    </AppBar>
  );
};


export default Header;