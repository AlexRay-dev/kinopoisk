import React, {FC} from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import FavoriteButton from "./favorite-button";
import WatchLaterButton from "./watch-later-button";
import {useNavigate} from "react-router-dom";
import {IMAGE_URL} from "../../../../shared/settings/settings";

interface IMovieCardProps {
  poster_path: string;
  backdrop_path: string | null;
  vote_average: number;
  title: string;
  id: number;
}
export interface ICardButtonProps {
  id: number;
}

const MovieCard: FC<IMovieCardProps> = ({ poster_path, backdrop_path, vote_average, title, id }) => {
  const navigate = useNavigate();
  const imagePath = poster_path || backdrop_path;
  const matches = useMediaQuery('(max-width:600px)');

  function onClickButton() {
    navigate(`/movie/${id}`)
  }

  return (
    <Grid item xs={6} md={6}>
      <Card
        sx={{
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
          height: "300px",
          border: '1px solid #d9d9d9',
          display: 'flex',
          m: '0 auto',
          flexDirection: matches ? 'column' : 'row',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: 190
          }}
          image={IMAGE_URL + imagePath}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            boxSizing: 'border-box',
          }}
        >
          <CardHeader
            subheader={`Рейтинг: ${vote_average}`}
            action={
              <>
                <FavoriteButton id={id} />
                <WatchLaterButton id={id} />
              </>
            }
          />

          <Typography
            variant="body1"
            sx={{ flex: '1 0 auto', fontWeight: 500 }}
            p={'16px'}
          >
            {title}
          </Typography>

          <Divider />

          <CardActions>
            <Button
              onClick={onClickButton}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                color: '#000',
                fontWeight: 400,
                pl: '16px',
              }}
              variant="text"
              size="small"
              color="primary"

            >
              Подробнее
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default MovieCard;