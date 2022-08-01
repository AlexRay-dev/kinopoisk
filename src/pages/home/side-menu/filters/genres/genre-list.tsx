import {Box, FormGroup} from '@mui/material';
import React, {FC} from 'react';
import {genreListData} from "../../../../../shared/data/genreListData";
import GenreCheckbox from "./genre-checkbox";

const GenreList: FC = () => {
  return (
    <Box mt={1}>
      <FormGroup>
        {genreListData.map(({name, id}) =>
          <GenreCheckbox key={id} id={id} name={name}/>
        )}
      </FormGroup>
    </Box>
  );
};

export default GenreList;