import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";

type RegistrationInfo = { username: string; email: string; password: string };

export const SignUpPage = () => {
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>({
    username: "",
    email: "",
    password: "",
  });

  const handleRegistration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegistrationInfo({ ...registrationInfo, [event.target.name]: value });
  };

  const handleSubmitRegistration = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        registrationInfo
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterPageWrapper>
      <InputWrapper>
        <Input
          label="Username"
          type="text"
          value={registrationInfo.username}
          name={"username"}
          onChange={handleRegistration}
          id="username"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Email"
          type="email"
          value={registrationInfo.email}
          name={"email"}
          onChange={handleRegistration}
          id="registration-email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Password"
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
