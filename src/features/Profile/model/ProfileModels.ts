export type IGetProfile = {
  bio: string;
  avatarUrl: string;
  userID: number;
};

export type ProfileLoaderData = {
  profile: IGetProfile;
  reviewsData: GetUserReviewsResponse;
  username: string;
};

export type UserGameReview = {
  game: Partial<{
    game_id: number;
    metacritic: number;
    slug: string;
    name: string;
    description: string;
    imagem: string;
  }>;
  status: number;
  score: number;
  review: string;
};

export type GetUserReviewsResponse = {
  games: UserGameReview[];
  totalItems: number;
};
