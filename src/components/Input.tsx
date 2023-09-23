import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";

type TextInputProps = {
  type: string;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
};

// FIXME: Fix controlled uncontrolled error state of input.
export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type,
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
    />
  );
};

const Input = styled("input")({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
});
