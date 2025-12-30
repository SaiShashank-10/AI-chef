export type Diet = "veg" | "non-veg" | "vegan";
export type Skill = "beginner" | "intermediate" | "advanced";

export interface UserPreferences {
  diet: Diet;
  spiceLevel: number;
  cookingSkill: Skill;
  availableTime: number;
}
