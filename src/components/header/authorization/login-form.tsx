import React, {ChangeEvent, FC, useState} from 'react';
import LoginName from "./login-name";
import LoginPassword from "./login-password";
import LoginButton from "./login-button";
import {setAuthModalState} from "../../../store/reducers/modalSlice";
import {useAppDispatch} from "../../../hooks/redux";
import {setAuthStatus} from "../../../store/reducers/authSlice";
import {DEFAULT_ADMIN_NAME, DEFAULT_ADMIN_PASSWORD} from "../../../shared/settings/settings";

const LoginForm: FC = () => {
  const [login, setLogin] = useState<string>(DEFAULT_ADMIN_NAME);
  const [password, setPassword] = useState<string>(DEFAULT_ADMIN_PASSWORD);
  const dispatch = useAppDispatch();

  function submitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValid = login === DEFAULT_ADMIN_NAME && password === DEFAULT_ADMIN_PASSWORD;

    if(isValid) {
      dispatch(setAuthStatus(true));
      dispatch(setAuthModalState(false));
      return
    }
    alert("Введён неверный логин или пароль")
  }

  return (
    <form onSubmit={submitHandler} style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
      <LoginName login={login} setLogin={setLogin}/>
      <LoginPassword password={password} setPassword={setPassword}/>
      <LoginButton/>
    </form>
  );
};

export default LoginForm;