// frontend/chefie/src/components/RecipeResultCard.tsx

export interface Recipe {
  id: number;
  title: string;
  time: number;
  difficulty: "easy" | "medium" | "hard";
  match: number;
}

interface RecipeResultCardProps {
  recipe: Recipe;
  onSelect: () => void;
}

export default function RecipeResultCard({
  recipe,
  onSelect,
}: RecipeResultCardProps) {
  return (
    <div
      onClick={onSelect}
      className="
        p-4 rounded-2xl border cursor-pointer
        hover:bg-gray-100 transition
      "
    >
      <h3 className="text-lg font-semibold">
        {recipe.title}
      </h3>

      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>⏱ {recipe.time} mins</span>
        <span className="capitalize">
          {recipe.difficulty}
        </span>
      </div>

      <div className="mt-2 text-sm font-medium text-green-700">
        ✨ {recipe.match}% match
      </div>
    </div>
  );
}
