import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";

type TextInputProps = {
  type: string;
  onChange: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
  id?: string;
  placeholder?: string;
};

// TODO: Decide if you want to use this component or not, alternative would be using the Input component from Material UI or something similar

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  id,
  ...props
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      id={id}
      {...props}
    />
  );
};

const Input = styled("input")({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
});
