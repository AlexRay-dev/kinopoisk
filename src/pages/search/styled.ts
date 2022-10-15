import {Typography, styled, Box, Button, Card} from "@mui/material";

export const SearchInner = styled(Box)(() => ({
  maxWidth: "700px",
  width: "100%",
  margin: "20px auto 0",
}));

export const SearchTitle = styled(Typography)(() => ({
  textAlign: "center",
  marginBottom: "20px",
}));

export const SearchButton = styled(Button)(() => ({
  flex: '0 200px',
  marginBottom: '20px',
  marginRight: '5px',
}));

export const SearchCard = styled(Card)(() => ({
  boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
  minHeight: '320px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  margin: '0 auto',
}));