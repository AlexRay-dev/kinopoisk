import {Container, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const HeaderLink = styled(NavLink)(() => ({
  color: "white",
  textDecoration: "none",
  paddingRight: "25px",
  "&:hover": {textDecoration: 'underline'}
}));

export const HeaderInner = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));