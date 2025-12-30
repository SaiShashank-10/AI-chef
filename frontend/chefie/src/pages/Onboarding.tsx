import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold">
        Welcome to AI Recipe Assistant 🍳
      </h1>

      <p className="mt-4 text-gray-600">
        Let’s personalize your cooking experience
      </p>

      <button
        onClick={() => navigate("/home")}
        className="mt-8 px-6 py-3 bg-black text-white rounded-xl"
      >
        Get Started
      </button>
    </div>
  );
}
