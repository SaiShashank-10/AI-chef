import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Inline types to avoid import errors
type Quantity = "low" | "medium" | "high";

interface Ingredient {
  id: number;
  name: string;
  selected: boolean;
  quantity: Quantity;
}

export default function ConfirmIngredients() {
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "Tomato", selected: true, quantity: "medium" },
    { id: 2, name: "Onion", selected: true, quantity: "high" },
    { id: 3, name: "Capsicum", selected: false, quantity: "low" },
    { id: 4, name: "Potato", selected: true, quantity: "medium" },
  ]);

  const toggleIngredient = (id: number) => {
    setIngredients((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  const updateQuantity = (id: number, quantity: Quantity) => {
    setIngredients((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">
          Confirm Ingredients 🧺
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Review and adjust detected ingredients
        </p>
      </div>

      {/* Ingredient List */}
      <div className="space-y-4">
        {ingredients.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl border"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleIngredient(item.id)}
              />
              <span className="text-lg font-medium">
                {item.name}
              </span>
            </div>

            {item.selected && (
              <div className="flex gap-2 mt-3">
                {(["low", "medium", "high"] as Quantity[]).map(
                  (qty) => (
                    <button
                      key={qty}
                      onClick={() =>
                        updateQuantity(item.id, qty)
                      }
                      className={`px-3 py-1 rounded-full text-sm border ${
                        item.quantity === qty
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    >
                      {qty}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={() => {
          const selected = ingredients.filter(
            (i) => i.selected
          );
          console.log("Confirmed Ingredients:", selected);
          navigate("/recipes");
        }}
        className="
          w-full mt-8 py-4 rounded-2xl
          bg-black text-white text-lg font-medium
        "
      >
        Find Recipes 🍽️
      </button>
    </div>
  );
}
