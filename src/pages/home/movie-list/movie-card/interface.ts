export interface IMovieCardProps {
  poster_path: string;
  backdrop_path: string | null;
  vote_average: number;
  title: string;
  id: number;
}
export interface ICardButtonProps {
  id: number;
}