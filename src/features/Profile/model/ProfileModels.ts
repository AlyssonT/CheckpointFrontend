export type IGetProfile = {
  bio: string;
  avatarUrl: string;
  userID: number;
};

export type ProfileLoaderData = {
  profile: IGetProfile;
};
