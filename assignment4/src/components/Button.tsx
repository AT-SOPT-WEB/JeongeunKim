import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick, ...props }: Props) => {
  return (
    <button
      className="w-full bg-sky-100 py-2 hover:cursor-pointer hover:bg-sky-300 transition-colors rounded-md disabled:bg-gray-300 disabled:hover:cursor-not-allowed"
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
