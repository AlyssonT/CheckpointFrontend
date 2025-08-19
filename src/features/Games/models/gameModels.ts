export type Game = {
  id: number;
  game_id: number;
  slug: string;
  name: string;
  description: string;
  imagem: string;
  metacritic: number;
  genres: Genre[];
};

export type Genre = {
  id: number;
  description: string;
};

export type GetGamesResponse = {
  games: Game[];
  totalItems: number;
};

export type GetGameByIdResponse = Game & {
  genres: Genre[];
};

const GameStatus = {
  Playing: 0,
  Finished: 1,
  Backlog: 2,
  Dropped: 3,
};

export type GameStatus = number;

export const GameStatusName: Record<GameStatus, keyof typeof GameStatus> = {
  [GameStatus.Playing]: "Playing",
  [GameStatus.Finished]: "Finished",
  [GameStatus.Backlog]: "Backlog",
  [GameStatus.Dropped]: "Dropped",
};

export type ReviewResponse = {
  userId: number;
  gameId: number;
  username: string;
  review: string;
  status: GameStatus;
  score: number;
};

export type GetGameReviewsResponse = {
  averageRating: number;
  backlog: number;
  playing: number;
  finished: number;
  dropped: number;
  reviews: ReviewResponse[];
  totalItems: number;
};

export type GamePageLoaderData = {
  gameData: GetGameByIdResponse;
  reviewsData: GetGameReviewsResponse;
};
