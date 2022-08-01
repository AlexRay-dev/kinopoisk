import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {setCurrentPage} from "../../../store/reducers/paginationSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectSortedMovies} from "../movie-list/utils/selectors";
import {CONTENT_PER_PAGE} from "../../../shared/settings/settings";

const CustomPagination: FC = () => {
  const filteredMovieList = useAppSelector(selectSortedMovies)
  const {currentPage} = useAppSelector(state => state.paginationReducer)
  const dispatch = useAppDispatch()
  const pagesCount = Math.ceil(filteredMovieList.length / CONTENT_PER_PAGE)

  function prevPage() {
    dispatch(setCurrentPage(currentPage - 1))
  }

  function nextPage() {
    dispatch(setCurrentPage(currentPage + 1))
  }

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', mt: '20px'}}>
        <Button
          disabled={currentPage === 1}
          onClick={prevPage}
          variant="contained"
          color="primary"
          size={"small"}
          sx={{
            textTransform: 'none',
            fontSize: '16px',
            p: '3px 20px',
          }}
        >
          Назад
        </Button>
        <Button
          disabled={currentPage === pagesCount}
          onClick={nextPage}
          variant="contained"
          color="primary"
          size={"small"}
          sx={{
            textTransform: 'none',
            fontSize: '16px',
            p: '3px 20px',
          }}
        >
          Вперед
        </Button>
      </Box>
      <Typography
        align="center"
        mt="15px"
        sx={{
          userSelect: "none"
        }}
      >
        {currentPage} of {pagesCount}
      </Typography>
    </>
  );
};

export default CustomPagination;