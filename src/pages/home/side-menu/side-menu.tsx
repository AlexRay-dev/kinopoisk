import React, {FC} from "react";
import GenreList from "./filters/genres/genre-list";
import CustomPagination from "./pagination/pagination";
import PopularSelect from "./filters/selects/popular-select";
import UserFavoriteSelect from "./filters/selects/user-favorite-select";
import YearSelect from "./filters/selects/year-select";
import ResetButton from "./filters/reset-button/reset-button";
import {useAppSelector} from "../../../core/hooks/redux";
import {selectAuth} from "../../../core/store/reducers/authSlice";
import {SideMenuInner, SideMenuTitle} from "./styled";

const SideMenu: FC = () => {
  const {isAuth} = useAppSelector(selectAuth);

  return (
    <SideMenuInner component={"aside"}>
      <SideMenuTitle variant={"h4"}>Фильтры:</SideMenuTitle>
      <ResetButton/>
      <PopularSelect/>
      <YearSelect/>
      {isAuth && <UserFavoriteSelect/>}
      <GenreList/>
      <CustomPagination/>
    </SideMenuInner>
  );
}

export default SideMenu;
