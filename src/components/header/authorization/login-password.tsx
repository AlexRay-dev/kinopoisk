import React, {ChangeEvent, Dispatch, FC} from 'react';
import {TextField} from "@mui/material";

interface ILoginPasswordProps {
  password: string,
  setPassword: Dispatch<React.SetStateAction<string>>;
}

const LoginPassword: FC<ILoginPasswordProps> = ({password, setPassword}) => {
  function onChangePass(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  return (
    <TextField
      required
      label="Пароль"
      type="password"
      autoComplete="current-password"
      variant="standard"
      fullWidth
      margin="dense"
      value={password}
      onChange={onChangePass}
    />
  );
};

export default LoginPassword;