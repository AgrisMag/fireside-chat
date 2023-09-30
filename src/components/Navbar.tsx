import styled from "@emotion/styled";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>Fireside chat</div>
      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
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
