import {Box, styled} from "@mui/material";

export const ModalInner = styled(Box)(({theme}) => ({
  padding: "30px",
  width: "100%",
  maxWidth: "400px",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[24],
  zIndex: theme.zIndex.modal,
}));