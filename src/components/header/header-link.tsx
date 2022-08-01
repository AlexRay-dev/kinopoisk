import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

interface IHeaderLinkProps {
  title: string,
  path: string,
}

const style = {
  color: "white", textDecoration: "none", pr: "25px", "&:hover": {textDecoration: 'underline'}
}

const HeaderLink: FC<IHeaderLinkProps> = ({title, path}) => {
  return (
    <Typography component={Link}  to={path} sx={style}>{title}</Typography>
  );
};

export default HeaderLink;