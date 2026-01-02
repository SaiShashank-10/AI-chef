export type Quantity = "low" | "medium" | "high";

export interface Ingredient {
  id: number;
  name: string;
  selected: boolean;
  quantity: Quantity;
}
