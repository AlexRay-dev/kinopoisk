import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {genreListData} from "../../shared/data/genreListData";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentQuestion, setFilteredSearchList} from "../../store/reducers/searchSlice";
import {filterByGenre} from "../home/movie-list/utils/sorting";
import {movieListData} from "../../shared/data/movieListData";

const GenresSearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion} = useAppSelector(state => state.searchReducer)

  function onClickButton(id: number) {
    dispatch(setCurrentQuestion(currentQuestion + 1))
    dispatch(setFilteredSearchList(filterByGenre(movieListData, [id])))
  }

  return (
    <Box sx={{maxWidth: "700px",width: "100%", m: "20px auto 0"}}>
      <Typography variant={"h2"} component={"h2"} sx={{
        textAlign: "center",
        mb: "20px",
      }}>Выберите жанр</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {genreListData.map((item) => (
          <Button
            key={item.id}
            onClick={() => onClickButton(item.id)}
            sx={{ flex: '0 200px', mb: '20px', mr: '5px' }}
            variant="outlined"
          >
            {item.name}
          </Button>
        ))}
      </Box>

    </Box>
  );
};

export default GenresSearch;