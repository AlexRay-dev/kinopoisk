import React, {FC} from 'react';
import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import LoginModal from "./authorization/login-modal";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAuthModalState} from "../../store/reducers/modalSlice";
import {setAuthStatus} from "../../store/reducers/authSlice";
import HeaderLink from "./header-link";

const Header: FC = () => {
  const {isAuth} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  function clickHandler() {
    if (isAuth) {
      dispatch(setAuthStatus(false))
      return
    }
    dispatch(setAuthModalState(true))
  }

  return (
    <AppBar position={"static"}>
      <Toolbar sx={{}}>
        <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Box>
            <HeaderLink title="Главная" path="/"/>
            <HeaderLink title="Подбор фильма" path="/search"/>
          </Box>

          <Button onClick={clickHandler} variant={"contained"} color={"success"}>{isAuth ? "Выйти" : "Авторизация"}</Button>
          <LoginModal/>
        </Container>
      </Toolbar>
    </AppBar>
  );
};


export default Header;