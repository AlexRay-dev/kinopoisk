import {Button, styled, Typography} from "@mui/material";

export const PaginationButton = styled(Button)(() => ({
  textTransform: 'none',
  fontSize: '16px',
  padding: '3px 20px',
}));

export const PaginationCount = styled(Typography)(() => ({
  userSelect: "none",
  marginTop: "15px",
  textAlign: "center",
}));