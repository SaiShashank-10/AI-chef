import { useNavigate } from "react-router-dom";
import RecipeResultCard, {
  type Recipe,
} from "../components/RecipeResultCard";

export default function Recipes() {
  const navigate = useNavigate();

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Tomato Rice",
      time: 25,
      difficulty: "easy",
      match: 92,
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      time: 20,
      difficulty: "easy",
      match: 88,
    },
    {
      id: 3,
      title: "Capsicum Curry",
      time: 30,
      difficulty: "medium",
      match: 81,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">
          Recipes You Can Cook 🍽️
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Based on your ingredients
        </p>
      </div>

      <div className="space-y-4">
        {recipes.map((recipe) => (
          <RecipeResultCard
            key={recipe.id}
            recipe={recipe}
            onSelect={() =>
              navigate("/cook", { state: { recipe } })
            }
          />
        ))}
      </div>
    </div>
  );
}
