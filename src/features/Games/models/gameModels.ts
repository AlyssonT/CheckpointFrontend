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
