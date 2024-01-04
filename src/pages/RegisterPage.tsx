import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Button } from "../components/shared/Button";
import { Input } from "../components/shared/Input";
import axios from "axios";

type RegistrationInfo = { name: string; email: string; passwordHashed: string };

export const RegisterPage = () => {
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>({
    name: "",
    email: "",
    passwordHashed: "",
  });

  const handleRegistration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegistrationInfo({ ...registrationInfo, [event.target.name]: value });
  };

  const handleSubmitRegistration = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
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
          value={registrationInfo.name}
          name={"name"}
          onChange={handleRegistration}
          id="name"
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
          value={registrationInfo.passwordHashed}
          name={"passwordHashed"}
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
