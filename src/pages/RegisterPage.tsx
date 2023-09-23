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
      <Label htmlFor="username">Username</Label>
      <TextInput
        type="text"
        value={username}
        onChange={handleUsernameChange}
        id="username"
      />
      <Label htmlFor="registration-email">Email</Label>
      <TextInput
        type="email"
        value={email}
        onChange={handleEmailChange}
        id="registration-email"
      />
      <Label htmlFor="registration-password">Password</Label>
      <TextInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        id="registration-password"
      />
      <Button onClick={handleRegistration}>Register</Button>
    </RegisterPageWrapper>
  );
};

const RegisterPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "2px solid #fff",
  padding: "15px",
});
