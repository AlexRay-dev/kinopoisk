import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentQuestion, setFilteredSearchList} from "../../store/reducers/searchSlice";
import {filterBySearchPopularity} from "../home/movie-list/utils/sorting";
import {Box, Button, Typography} from "@mui/material";

const PopularitySearch: FC = () => {
  const dispatch = useAppDispatch();
  const {currentQuestion, movieList} = useAppSelector(state => state.searchReducer)

  function onClickButton(id: number, type: string) {
    dispatch(setCurrentQuestion(currentQuestion + 1))
    dispatch(setFilteredSearchList(filterBySearchPopularity(movieList, type)))
  }

  const movieRatingType = [{name: "Популярный", id: 1}, {name: "Неизвестный", id: 2}]

  return (
    <Box sx={{maxWidth: "700px", width: "100%", m: "20px auto 0"}}>
      <Typography variant={"h2"} component={"h2"} sx={{
        textAlign: "center",
        mb: "20px",
      }}>Популярный или неизвестный?</Typography>

      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {movieRatingType.map((item) => (
          <Button
            key={item.id}
            onClick={() => onClickButton(item.id, item.name)}
            sx={{flex: '0 200px', mb: '20px', mr: '5px'}}
            variant="outlined"
          >
            {item.name}
          </Button>
        ))}
      </Box>

    </Box>
  )
};

export default PopularitySearch;