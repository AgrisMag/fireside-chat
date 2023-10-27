import React, { ChangeEvent, InputHTMLAttributes } from "react";

// Define the props for the input component
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  onKeyPress,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={rest.id || rest.name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        onKeyDown={onKeyPress}
        {...rest}
      />
    </div>
  );
};
