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
      className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium"
    >
      {label}
    </button>
  );
}
