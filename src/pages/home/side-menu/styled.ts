import {Box, styled, Typography} from "@mui/material";

export const SideMenuInner = styled(Box)(() => ({
  padding: '1rem',
  boxShadow: '0 10px 40px rgb(0 0 0 / 30%)',
  borderRadius: "5px",
  maxWidth: '15.625rem',
  height: "100%",
}));

export const SideMenuTitle = styled(Typography)(() => ({
  fontWeight: "500",
}));