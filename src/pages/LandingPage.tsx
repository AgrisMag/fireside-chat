import styled from "@emotion/styled";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
