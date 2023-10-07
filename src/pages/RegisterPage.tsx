import styled from "@emotion/styled";
import { Label } from "../components/Label";
import { TextInput } from "../components/Input";
import { useState } from "react";
import { Button } from "../components/Button";

export const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleRegistration = () => {
    console.log("Registered");
  };

  return (
    <RegisterPageWrapper>
      <InputWrapper>
        <Label htmlFor="username">Username</Label>
        <TextInput
          type="text"
          value={username}
          onChange={handleUsernameChange}
          id="username"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="registration-email">Email</Label>
        <TextInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="registration-email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="registration-password">Password</Label>
        <TextInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
          id="registration-password"
        />
      </InputWrapper>
      <Button onClick={handleRegistration}>Register</Button>
    </RegisterPageWrapper>
  );
};

const RegisterPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
