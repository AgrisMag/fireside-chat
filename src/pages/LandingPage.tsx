import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

export const LandingPage = () => {
  const [email, setEmail] = useState<string | null>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  console.log(email);

  const handleEnter = () => {
    console.log("Entering for a chat!");
  };

  return (
    <LandingPageWrapper>
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          onChange={(event) => handleEmailChange(event)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" />
      </label>
      <input
        type="button"
        value="Enter"
        style={{ marginTop: "10px" }}
        onClick={handleEnter}
      />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
