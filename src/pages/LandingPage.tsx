import styled from "@emotion/styled";
import { useState } from "react";
import { TextInput } from "../components/Input";
import { Label } from "../components/Label";
import { Button } from "../components/Button";

export const LandingPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <LandingPageWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <TextInput
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
          id="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <TextInput
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          id="password"
        />
      </InputWrapper>
      <Button onClick={handleSubmit}>Submit</Button>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "15px",
  "& > *": {
    margin: "10px",
  },
});

const InputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
