import styled from "@emotion/styled";
import { useState } from "react";
import { TextInput } from "../components/Input";
import { Label } from "../components/Label";

export const LandingPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <LandingPageWrapper>
      <Label htmlFor="email">Email</Label>
      <TextInput
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
        id="email"
      />
      <Label htmlFor="password">Password</Label>
      <TextInput
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Password"
        id="password"
      />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
