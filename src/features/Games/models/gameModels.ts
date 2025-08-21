import { z } from "zod/v4";
import type { UserGameReview } from "../../Profile/model/ProfileModels";

export type Game = {
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

export const statusOptions = [
  { label: "Backlog", value: 2 },
  { label: "Playing", value: 0 },
  { label: "Finished", value: 1 },
  { label: "Dropped", value: 3 },
];

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
  userReviewData: UserGameReview | null;
};

export const reviewSchema = z.object({
  review: z.string().max(500, "Review must be at most 500 characters long"),
  score: z.string().refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "0 <= Score <= 100"),
  status: z.enum(["0", "1", "2", "3"]),
});

export type ReviewForm = z.infer<typeof reviewSchema>;

export type StatusGame = "0" | "1" | "2" | "3";

export type PostPutReviewData = {
  gameId: number;
} & ReviewForm;
