import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate(`/${event.currentTarget.name}`);
  };

  return (
    <NavbarWrapper>
      <div>Fireside chat</div>
      <div>
        <button name="signin" onClick={handleNavigate}>
          Sign In
        </button>
        <button name="signup" onClick={handleNavigate}>
          Sign Up
        </button>
        <button name="chat" onClick={handleNavigate}>
          Enter chat
        </button>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "5px",
});
