export type Game = {
  id: number;
  game_id: number;
  slug: string;
  name: string;
  description: string;
  imagem: string;
  metacritic: number;
};

export type GetGamesResponse = {
  games: Game[];
  totalItems: number;
};
