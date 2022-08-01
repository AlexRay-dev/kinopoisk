import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentQuestion, setFilteredSearchList} from "../../store/reducers/searchSlice";
import {sortByPopularity} from "../home/movie-list/utils/sorting";
import {SORT} from "../../shared/settings/settings";

const RatingSearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion, movieList} = useAppSelector(state => state.searchReducer)

  function onClickButton(id: number, type: string) {
    dispatch(setCurrentQuestion(currentQuestion + 1))
    if(type === "Высокая") {
      dispatch(setFilteredSearchList(sortByPopularity(movieList, SORT.RATING_DOWN)))
    }
    dispatch(setFilteredSearchList(sortByPopularity(movieList, SORT.RATING_UP)))
  }

  const movieRatingType = [{name: "Высокая", id: 1}, {name: "Низкая", id: 2}]

  return (
    <Box sx={{maxWidth: "700px",width: "100%", m: "20px auto 0"}}>
      <Typography variant={"h2"} component={"h2"} sx={{
        textAlign: "center",
        mb: "20px",
      }}>Выберите оценку фильма</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {movieRatingType.map((item) => (
          <Button
            key={item.id}
            onClick={() => onClickButton(item.id, item.name)}
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

export default RatingSearch;