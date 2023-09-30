import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <NavbarWrapper>
      <div>Fireside chat</div>
      <div>
        <button onClick={handleSignInClick}>Sign In</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
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
