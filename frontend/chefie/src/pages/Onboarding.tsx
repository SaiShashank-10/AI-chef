import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Explicit types (NO any)
type Diet = "veg" | "non-veg" | "vegan";
type Skill = "beginner" | "intermediate" | "advanced";

interface UserPreferences {
  diet: Diet;
  spiceLevel: number;
  cookingSkill: Skill;
  availableTime: number;
}

export default function Onboarding() {
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);

  const [preferences, setPreferences] = useState<UserPreferences>({
    diet: "veg",
    spiceLevel: 3,
    cookingSkill: "beginner",
    availableTime: 30,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 max-w-md mx-auto">
      {/* STEP 1: Diet */}
      {step === 1 && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Choose your diet 🍽️
          </h1>

          <div className="space-y-3">
            {(["veg", "non-veg", "vegan"] as Diet[]).map((diet) => (
              <button
                key={diet}
                onClick={() =>
                  setPreferences({ ...preferences, diet })
                }
                className={`w-full py-3 rounded-xl border transition ${
                  preferences.diet === diet
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {diet.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={nextStep}
            className="mt-8 bg-black text-white py-3 rounded-xl"
          >
            Next
          </button>
        </>
      )}

      {/* STEP 2: Spice Level */}
      {step === 2 && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Spice level 🌶️
          </h1>

          <input
            type="range"
            min={1}
            max={5}
            value={preferences.spiceLevel}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                spiceLevel: Number(e.target.value),
              })
            }
            className="w-full"
          />

          <p className="mt-4 text-center">
            Level: {preferences.spiceLevel}
          </p>

          <div className="flex justify-between mt-8">
            <button onClick={prevStep}>Back</button>
            <button
              onClick={nextStep}
              className="bg-black text-white px-6 py-2 rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 3: Cooking Skill */}
      {step === 3 && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Cooking skill 👨‍🍳
          </h1>

          <div className="space-y-3">
            {(
              ["beginner", "intermediate", "advanced"] as Skill[]
            ).map((skill) => (
              <button
                key={skill}
                onClick={() =>
                  setPreferences({
                    ...preferences,
                    cookingSkill: skill,
                  })
                }
                className={`w-full py-3 rounded-xl border transition ${
                  preferences.cookingSkill === skill
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {skill.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button onClick={prevStep}>Back</button>
            <button
              onClick={nextStep}
              className="bg-black text-white px-6 py-2 rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* STEP 4: Available Time */}
      {step === 4 && (
        <>
          <h1 className="text-2xl font-bold mb-6">
            Time available ⏱️
          </h1>

          <input
            type="number"
            min={5}
            step={5}
            value={preferences.availableTime}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                availableTime: Number(e.target.value),
              })
            }
            className="w-full border rounded-lg px-4 py-2"
          />

          <p className="text-gray-600 mt-2">
            Minutes you can spend cooking
          </p>

          <div className="flex justify-between mt-8">
            <button onClick={prevStep}>Back</button>
            <button
              onClick={() => {
                console.log("User Preferences:", preferences);
                navigate("/home");
              }}
              className="bg-black text-white px-6 py-2 rounded-xl"
            >
              Finish
            </button>
          </div>
        </>
      )}
    </div>
  );
}
