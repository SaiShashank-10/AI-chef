import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Good Evening 👋</h1>
            <p className="text-gray-600 text-sm mt-1">
              Let’s cook something delicious today
            </p>
          </div>

          <button
            onClick={() => navigate("/profile")}
            className="
              w-10 h-10 rounded-full
              bg-gray-200
              flex items-center justify-center
              active:scale-95 transition
            "
          >
            👤
          </button>
        </div>
      </div>

      {/* Primary Action */}
      <div className="mb-10">
        <PrimaryButton
          label="Scan Ingredients 📷"
          onClick={() => navigate("/scan")}
        />
        <p className="text-xs text-gray-500 mt-2 text-center">
          Scan what’s available in your kitchen
        </p>
      </div>

      {/* AI Recommendations */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            AI Suggestions 🤖
          </h2>

          <button
            onClick={() => navigate("/recipes")}
            className="text-sm text-gray-600 underline"
          >
            View all
          </button>
        </div>

        <div className="space-y-4">
          <RecipeCard title="Vegetable Stir Fry" time={20} match={92} />
          <RecipeCard title="Tomato Rice" time={25} match={88} />
          <RecipeCard title="Capsicum Curry" time={30} match={84} />
        </div>
      </div>
    </div>
  );
}
