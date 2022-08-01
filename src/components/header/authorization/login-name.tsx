import React, {ChangeEvent, Dispatch, FC, ReactEventHandler} from 'react';
import {TextField} from "@mui/material";

interface ILoginNameProps {
  login: string,
  setLogin: Dispatch<React.SetStateAction<string>>;
}

const LoginName: FC<ILoginNameProps> = ({login, setLogin}) => {
  function onChangeLogin(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value)
  }

  return (
    <TextField
      required
      label="Имя"
      variant="standard"
      fullWidth
      margin="dense"
      value={login}
      onChange={onChangeLogin}
    />
  );
};

export default LoginName;