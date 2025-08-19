export type IGetProfile = {
  bio: string;
  avatarUrl: string;
  userID: number;
};

export type ProfileLoaderData = {
  profile: IGetProfile;
};

export type GetUserReviewsResponse = {
  game: {
    game_id: number;
    metacritic: number;
    slug: string;
    name: string;
    description: string;
    imagem: string;
  };
  status: number;
  score: number;
  review: string;
}[];
