import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Good Evening 👋</h1>
          <p className="text-gray-600 text-sm">
            Let’s decide what to cook today
          </p>
        </div>

        <button
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full bg-gray-300"
        >
          👤
        </button>
      </div>

      {/* Scan Ingredients */}
      <div className="mb-8">
        <PrimaryButton
          label="Scan Ingredients 📷"
          onClick={() => navigate("/scan")}
        />
      </div>

      {/* AI Recommendations */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          AI Suggestions For You 🤖
        </h2>

        <div className="space-y-4">
          <RecipeCard title="Vegetable Stir Fry" time={20} match={92} />
          <RecipeCard title="Tomato Rice" time={25} match={88} />
          <RecipeCard title="Capsicum Curry" time={30} match={84} />
        </div>
      </div>
    </div>
  );
}
