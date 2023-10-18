import styled from "@emotion/styled";
import { Label } from "../components/Label";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";

type RegistrationInfo = { username: string; email: string; password: string };

export const RegisterPage = () => {
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>({
    username: "",
    email: "",
    password: "",
  });

  const handleRegistration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegistrationInfo({ ...registrationInfo, [event.target.name]: value });
  };

  const handleSubmitRegistration = () => {
    console.log("Registered");
  };

  return (
    <RegisterPageWrapper>
      <InputWrapper>
        <Label htmlFor="username">Username</Label>
        <input
          type="text"
          value={registrationInfo.username}
          name={"username"}
          onChange={handleRegistration}
          id="username"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="registration-email">Email</Label>
        <input
          type="email"
          value={registrationInfo.email}
          name={"email"}
          onChange={handleRegistration}
          id="registration-email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          value={registrationInfo.password}
          name={"password"}
          onChange={handleRegistration}
          id="registration-password"
        />
      </InputWrapper>
      <Button onClick={handleSubmitRegistration}>Register</Button>
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
