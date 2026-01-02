import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface CookingStep {
  id: number;
  instruction: string;
  time?: number;
}

export default function Cook() {
  const navigate = useNavigate();
  const location = useLocation();

  // Recipe passed from Recipes page
  const recipe = location.state?.recipe;

  // Fallback safety (never crash)
  if (!recipe) {
    navigate("/home");
    return null;
  }

  // Mock smart steps (AI will generate later)
  const steps: CookingStep[] = [
    {
      id: 1,
      instruction: "Wash and finely chop the onions and tomatoes.",
      time: 5,
    },
    {
      id: 2,
      instruction: "Heat oil in a pan and sauté onions until golden.",
      time: 7,
    },
    {
      id: 3,
      instruction: "Add tomatoes and cook until soft and mushy.",
      time: 8,
    },
    {
      id: 4,
      instruction: "Add spices and mix well. Cook for 3 minutes.",
      time: 3,
    },
    {
      id: 5,
      instruction: "Add rice and water. Cook until done.",
      time: 12,
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">
          Cooking: {recipe.title} 🍳
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      {/* Step Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full p-6 rounded-3xl bg-gray-100 text-center">
          <p className="text-lg font-medium leading-relaxed">
            {steps[currentStep].instruction}
          </p>

          {steps[currentStep].time && (
            <p className="mt-4 text-sm text-gray-600">
              ⏱ Approx {steps[currentStep].time} mins
            </p>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex justify-between gap-4">
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.max(prev - 1, 0))
          }
          disabled={isFirst}
          className={`
            flex-1 py-3 rounded-xl border
            ${isFirst ? "opacity-40" : ""}
          `}
        >
          Back
        </button>

        {!isLast ? (
          <button
            onClick={() =>
              setCurrentStep((prev) =>
                Math.min(prev + 1, steps.length - 1)
              )
            }
            className="
              flex-1 py-3 rounded-xl
              bg-black text-white
            "
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => navigate("/home")}
            className="
              flex-1 py-3 rounded-xl
              bg-green-600 text-white
            "
          >
            Finish 🎉
          </button>
        )}
      </div>
    </div>
  );
}
