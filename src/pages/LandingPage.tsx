import styled from "@emotion/styled";
import { useState } from "react";
import { TextInput } from "../components/Input";

export const LandingPage = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <LandingPageWrapper>
      <TextInput type="email" onChange={handleEmailChange} value={email} />
      <TextInput
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
