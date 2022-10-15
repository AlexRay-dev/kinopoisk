import React, {FC} from 'react';
import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;