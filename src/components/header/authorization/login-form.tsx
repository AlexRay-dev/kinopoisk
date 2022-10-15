import React, {ChangeEvent, FC, useState} from 'react';
import {setAuthModalState} from "../../../core/store/reducers/modalSlice";
import {setAuthStatus} from "../../../core/store/reducers/authSlice";
import {DEFAULT_ADMIN_NAME, DEFAULT_ADMIN_PASSWORD} from "../../../core/const/config";
import {useAppDispatch} from "../../../core/hooks/redux";
import {Button, Stack, TextField} from "@mui/material";

const LoginForm: FC = () => {
  const [login, setLogin] = useState<string>(DEFAULT_ADMIN_NAME);
  const [password, setPassword] = useState<string>(DEFAULT_ADMIN_PASSWORD);
  const dispatch = useAppDispatch();

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = login === DEFAULT_ADMIN_NAME && password === DEFAULT_ADMIN_PASSWORD;

    if(isValid) {
      dispatch(setAuthStatus(true));
      dispatch(setAuthModalState(false));
      return;
    }
    alert("Введён неверный логин или пароль");
  };

  return (
    <Stack component="form" direction="column" alignItems="flex-end" onSubmit={submitHandler}>
      <TextField
        required
        label="Имя"
        variant="standard"
        fullWidth
        margin="dense"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        required
        label="Пароль"
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        margin="dense"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" size="medium" variant="contained" sx={{mt: 2}}>Войти</Button>
    </Stack>
  );
};

export default LoginForm;