import React, {FC} from 'react';
import {Button, Stack} from "@mui/material";
import {setCurrentQuestion} from "../../core/store/reducers/searchSlice";
import {useAppDispatch} from "../../core/hooks/redux";
import {SearchInner, SearchTitle} from "./styled";

const EmptySearch: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <SearchInner>
      <SearchTitle variant="h2">Подходящие фильмы отсутствуют</SearchTitle>

      <Stack direction="row" spacing={3} justifyContent="center" mt="40px">
        <Button onClick={() => dispatch(setCurrentQuestion(0))} variant={"outlined"}>
          Повторить поиск
        </Button>
      </Stack>
    </SearchInner>
  );
};

export default EmptySearch;