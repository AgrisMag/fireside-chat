import React from "react";
import styled from "@emotion/styled";

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

// TODO: Switch to using Material UI's base label component

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

const StyledLabel = styled("label")({
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "5px",
});
