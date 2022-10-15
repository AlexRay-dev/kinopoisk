import React, {FC} from 'react';
import {
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import FavoriteButton from "./favorite-button";
import WatchLaterButton from "./watch-later-button";
import {useNavigate} from "react-router-dom";
import {IMAGE_URL} from "../../../../core/const/config";
import {IMovieCardProps} from "./interface";
import {MovieCardButton, MovieCardContent, MovieCardInner, MovieCardTitle} from "./styled";

const MovieCard: FC<IMovieCardProps> = ({ poster_path, backdrop_path, vote_average, title, id }) => {
  const navigate = useNavigate();
  const imagePath = poster_path || backdrop_path;

  return (
    <Grid item xs={6} md={6} >
      <MovieCardInner>
        <CardMedia component="img" sx={{maxWidth: 190}} image={IMAGE_URL + imagePath}/>

        <MovieCardContent>
          <CardHeader subheader={`Рейтинг: ${vote_average}`}
            action={
              <>
                <FavoriteButton id={id} />
                <WatchLaterButton id={id} />
              </>
            }/>

          <MovieCardTitle variant="body1">{title}</MovieCardTitle>
          <Divider />

          <CardActions>
            <MovieCardButton
              onClick={() => navigate(`/movie/${id}`)}
              variant="text"
              size="small"
              color="primary">
              Подробнее
            </MovieCardButton>
          </CardActions>
        </MovieCardContent>
      </MovieCardInner>
    </Grid>
  );
};

export default MovieCard;