interface RecipeCardProps {
  title: string;
  time: number;
  match: number;
}

export default function RecipeCard({
  title,
  time,
  match,
}: RecipeCardProps) {
  return (
    <div
      className="
        p-4 rounded-2xl bg-gray-100
        hover:bg-gray-200
        transition
        cursor-pointer
      "
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <span>⏱ {time} mins</span>
        <span className="font-medium text-green-700">
          ✨ {match}% match
        </span>
      </div>
    </div>
  );
}
