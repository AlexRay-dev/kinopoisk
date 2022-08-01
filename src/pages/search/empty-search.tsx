import React, {FC} from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {setCurrentQuestion} from "../../store/reducers/searchSlice";
import {useAppDispatch} from "../../hooks/redux";

const EmptySearch:FC = () => {
  const dispatch = useAppDispatch();

  function onTryAgain() {
    dispatch(setCurrentQuestion(0))
  }

  return (
    <Box sx={{maxWidth: "700px", width: "100%", m: "20px auto 0"}}>
      <Typography variant={"h2"} component={"h2"} sx={{
        textAlign: "center",
        mb: "20px",
      }}>Подходящие фильмы отсутствуют</Typography>
      <Stack direction="row" spacing={3} sx={{justifyContent: "center", mt: "40px"}}>
        <Button onClick={onTryAgain} variant={"outlined"}>Повторить поиск</Button>
      </Stack>
    </Box>
  );
};

export default EmptySearch;