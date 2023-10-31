import styled from "@emotion/styled";
import React, { ChangeEvent, InputHTMLAttributes } from "react";

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
    <InputWrapper className="mb-4">
      <StyledLabel htmlFor={rest.id || rest.name}>{label}</StyledLabel>
      <StyledInput onChange={onChange} onKeyDown={onKeyPress} {...rest} />
    </InputWrapper>
  );
};

const InputWrapper = styled("div")({
  marginBottom: "1rem",
});

const StyledLabel = styled("label")({
  display: "block",
  marginBottom: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#374151",
});

const StyledInput = styled("input")({
  display: "block",
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: 1.5,
  color: "#374151",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  transition:
    "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out",
  "&:focus": {
    outline: "none",
    color: "#1d4ed8",
    borderColor: "#2563eb",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.15)",
  },
});
