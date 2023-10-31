import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

type LandingPageProps = {
  children: React.ReactNode;
};

export const LandingPage = ({ children }: LandingPageProps) => {
  const navigate = useNavigate();

  const handleNavigate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.name);
    navigate(`/${event.currentTarget.name}`);
  };

  return (
    <LandingPageWrapper>
      <AboutSection>
        {/* First half content */}
        <div>Introduction to chat app with picture</div>
        {/* Add styling, background image, or animation here */}
      </AboutSection>
      <ActionSection>
        <div>
          <Button
            // className="px-3 py-1 m-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={handleNavigate}
            name=""
          >
            Sign in
          </Button>
          <Button
            // className="px-3 py-1 m-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={handleNavigate}
            name="signup"
          >
            Sign Up
          </Button>
        </div>
        {/* Second half content */}
        {children}
        {/* Add links to register and sign-in pages here */}
      </ActionSection>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
});

const AboutSection = styled("div")({
  backgroundColor: "#f0f0f0",
  padding: "1rem",
});

const ActionSection = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
});

const Button = styled("button")({
  border: "1px solid #2563EB",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  margin: "0.2rem",
  fontSize: "0.8rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#2563EB",
  },
});
