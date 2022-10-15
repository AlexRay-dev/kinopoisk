import {Box, Typography, styled} from "@mui/material";

export const MovieInfoInner = styled(Box)(() => ({
  height: `calc(100vh - 214px)`,
  padding: "50px 0 100px 0",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(41, 41, 41, 0.7)",
  backgroundBlendMode: "multiply",
  position: "relative",
}));

export const MovieInfoTitle = styled(Typography)(() => ({
  color: "white",
}));

export const MovieInfoPoster = styled(Box)(() => ({
  minWidth: "300px",
  mr: "77px",
  height: "450px",
}));