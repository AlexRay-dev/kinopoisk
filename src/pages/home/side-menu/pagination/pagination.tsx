import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {selectPagination, setCurrentPage} from "../../../../core/store/reducers/paginationSlice";
import {selectSortedMovies} from "../../../../core/utils/selectors";
import {CONTENT_PER_PAGE} from "../../../../core/const/config";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks/redux";
import {PaginationButton, PaginationCount} from "./styled";

const CustomPagination: FC = () => {
  const filteredMovieList = useAppSelector(selectSortedMovies);
  const {currentPage} = useAppSelector(selectPagination);
  const dispatch = useAppDispatch();
  const pagesCount = Math.ceil(filteredMovieList.length / CONTENT_PER_PAGE);

  return (
    <>
      <Stack justifyContent="space-evenly" direction="row" mt="20px">
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          variant="contained"
          color="primary"
          size="small">
          Назад
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === pagesCount}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          variant="contained"
          color="primary"
          size="small">
          Вперед
        </PaginationButton>
      </Stack>

      <PaginationCount>{currentPage} of {pagesCount}</PaginationCount>
    </>
  );
};

export default CustomPagination;