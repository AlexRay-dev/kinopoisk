import React from "react";
import {Box, Typography} from "@mui/material";
import GenreList from "./filters/genres/genre-list";
import CustomPagination from "./pagination";
import PopularSelect from "./filters/popular-select";
import UserFavoriteSelect from "./filters/user-favorite-select";
import YearSelect from "./filters/year-select";
import {useAppSelector} from "../../../hooks/redux";
import ResetButton from "./filters/reset-button";


function SideMenu() {
  const {isAuth} = useAppSelector(state => state.authReducer);

  return (
    <Box component={"aside"} p={"1rem"} boxShadow='0 10px 40px rgb(0 0 0 / 30%)' borderRadius={"5px"}
         maxWidth='15.625rem' height={"100%"}>
      <Typography variant={"h4"} component={"span"} fontWeight={"500"}>Фильтры:</Typography>
      <ResetButton/>
      <PopularSelect/>
      <YearSelect/>
      {isAuth && <UserFavoriteSelect/>}
      <GenreList/>
      <CustomPagination/>
    </Box>
  );
}


export default SideMenu;
