import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input = ({ id, label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className="focus:border-sky-400 border-gray-300 py-3 rounded-md min-w-128 border px-4 focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default Input;
