import React, {FC} from 'react';
import {Modal} from "@mui/material";
import {setAuthModalState} from "../../../core/store/reducers/modalSlice";
import LoginForm from "./login-form";
import {useAppDispatch, useAppSelector} from "../../../core/hooks/redux";
import {ModalInner} from "./styled";

const LoginModal: FC = () => {
  const {isAuthModalOpen} = useAppSelector(state => state.modalReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal open={isAuthModalOpen} onClose={() => dispatch(setAuthModalState(false))}>
        <ModalInner>
          <LoginForm/>
        </ModalInner>
      </Modal>
    </>
  );
};

export default LoginModal;