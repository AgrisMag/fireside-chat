import styled from "@emotion/styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, name }) => {
  return (
    <StyledButton onClick={onClick} name={name}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")({
  border: "1px solid #2563EB",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#2563EB",
  },
});
