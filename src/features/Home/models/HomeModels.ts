export type TopGamesResponse = {
  game_id: number;
  name: string;
  imageURL: string;
  reviewCount: number;
}[];

export type LatestReviewGame = {
  name: string;
  imageURL: string;
  game_id: number;
};

export type LatestReviewUser = {
  name: string;
  avatarURL: string;
};

export type LatestReviewsResponse = {
  user: LatestReviewUser;
  game: LatestReviewGame;
  status: number;
  score: number;
  userReview: string;
}[];

export type HomeLoaderData = {
  latestReviews: LatestReviewsResponse;
  topGames: TopGamesResponse;
};
