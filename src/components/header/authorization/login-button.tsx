import React, {FC} from 'react';
import {Button} from "@mui/material";

const LoginButton: FC = () => {
  return (
    <Button type={"submit"} size={"medium"} variant={"contained"} sx={{mt: 2}}>Войти</Button>
  );
};

export default LoginButton;