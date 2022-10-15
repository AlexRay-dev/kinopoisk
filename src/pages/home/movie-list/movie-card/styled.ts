import {Box, Button, Card, styled, Typography} from "@mui/material";

export const MovieCardInner = styled(Card)(({theme}) => ({
  display: 'flex',
  margin: '0 auto',
  height: "300px",
  flexDirection: 'row',
  boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
  border: '1px solid #d9d9d9',
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
  },
}));

export const MovieCardContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
}));
export const MovieCardTitle = styled(Typography)(() => ({
  flex: '1 0 auto',
  fontWeight: 500,
  padding: "16px"
}));
export const MovieCardButton = styled(Button)(() => ({
  textTransform: 'none',
  fontSize: '16px',
  color: '#000',
  fontWeight: 400,
  pl: '16px',
}));


