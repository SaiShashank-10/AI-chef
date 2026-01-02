export type Difficulty = "easy" | "medium" | "hard";

export interface Recipe {
  id: number;
  title: string;
  time: number; // minutes
  difficulty: Difficulty;
  match: number; // percentage
}
