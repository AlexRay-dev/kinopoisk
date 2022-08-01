import React, {FC} from 'react';
import {Box, Modal} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setAuthModalState} from "../../../store/reducers/modalSlice";
import LoginForm from "./login-form";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal: FC = () => {
  const {isAuthModalOpen} = useAppSelector(state => state.modalReducer);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(setAuthModalState(false));

  return (
    <>
      <Modal open={isAuthModalOpen} onClose={handleClose}>
        <Box sx={style}>
          <LoginForm/>
        </Box>
      </Modal>
    </>

  );
};

export default LoginModal;