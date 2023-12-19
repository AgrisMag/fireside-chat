import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import { Input as AntInput } from "antd";
import { EnterOutlined } from "@ant-design/icons";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void; // Callback for Enter keypress and icon click
  size?: "large" | "middle" | "small";
};

export const ChatInput: React.FC<InputProps> = ({
  onChange,
  onEnter,
  size,
  ...rest
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault(); // Prevents default behavior (form submission or line break)
      onEnter();
    }
  };

  const handleIconClick = () => {
    if (onEnter) onEnter();
  };

  return (
    <AntInput
      onChange={onChange}
      onKeyDown={handleKeyDown}
      size={size}
      suffix={
        <EnterOutlined
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        />
      }
      {...rest}
    />
  );
};
