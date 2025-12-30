interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
}

export default function PrimaryButton({
  label,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-4 rounded-2xl text-lg font-semibold
        bg-gradient-to-r from-black to-gray-800
        text-white
        active:scale-[0.98]
        transition-transform
      "
    >
      {label}
    </button>
  );
}
